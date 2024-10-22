import fastify from 'fastify';
import {getContact} from './contacts.js';


const fastifyServer = fastify({logger: true});

fastifyServer.get('/', async (request, reply) => {
    return {
        endpoints: [
            {method: 'GET', url: '/api/contact/:id', description: 'Contact Endpoint'},
            {method: 'post', url: '/api/notify', description: 'Notify endpoint'},
        ]
    };
});

fastifyServer.get('/health', async (request, reply) => {
    return {status: 'healthy'};
});

fastifyServer.get('/api/contact/:id', async (request, reply) => {
    const {id} = request.params;
    const contact = await getContact(id)
    if (!contact) {
        reply.status(404).send({error: 'Contact not found'});
        return;
    }
    reply.send(contact);
});

fastifyServer.post('/api/notify/:type', async (request, reply) => {

    const {type} = request.params;

    if(!['email','sms'].includes(type)) {
        reply.status(400).send({error: 'Invalid notification type. Type should be either email or sms.'});
        return;
    }

    const {destination, message} = request.body;




    if(!destination) {
        reply.status(400).send({error: 'Missing destination'});
        return;
    }

    if(!message) {
        reply.status(400).send({error: 'Missing message'});
        return;
    }

    if(type === 'sms' && message.length > 160) {
        reply.status(400).send({error: 'SMS message should not exceed 160 characters'});
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(type === 'email' && !emailRegex.test(destination)) {
        reply.status(400).send({error: 'Invalid email address'});
        return;
    }

    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber > 80) {
        reply.status(500).send({error: 'Failed to send notification. Try again later.'});
        return;
    }

    reply.send({status: 'Notification sent', destination, message});
})

const port = process.env.PORT || 7070;
fastifyServer.listen({port: port, host: '0.0.0.0'}, (err, address) => {
    if (err) throw err;
    console.log(`Server listening at ${address}`);
});
