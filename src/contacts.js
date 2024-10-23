const contacts = [
    { "id": "1", "name": "John", "surname": "Doe", "phoneNumber": "12345678901", "email": "john.doe@example.com" },
    { "id": "2", "name": "Jane", "surname": "Smith", "phoneNumber": "12345678902", "email": "jane.smith@example.com" },
    { "id": "3", "name": "Michael", "surname": "Johnson", "phoneNumber": "12345678903", "email": "michael.johnson@example.com" },
    { "id": "4", "name": "Emily", "surname": "Davis", "phoneNumber": "12345678904", "email": "emily.davis@example.com" },
    { "id": "5", "name": "Chris", "surname": "Brown", "phoneNumber": "12345678905", "email": "chris.brown@example.com" },
    { "id": "6", "name": "David", "surname": "Wilson", "phoneNumber": "12345678906", "email": "david.wilson@example.com" },
    { "id": "7", "name": "Linda", "surname": "Martinez", "phoneNumber": "12345678907", "email": "linda.martinez@example.com" },
    { "id": "8", "name": "Paul", "surname": "Anderson", "phoneNumber": "12345678908", "email": "paul.anderson@example.com" },
    { "id": "9", "name": "Laura", "surname": "Thomas", "phoneNumber": "12345678909", "email": "laura.thomas@example.com" },
    { "id": "10", "name": "Robert", "surname": "Taylor", "phoneNumber": "12345678910", "email": "robert.taylor@example.com" },
    { "id": "11", "name": "Susan", "surname": "Moore", "phoneNumber": "12345678911", "email": "susan.moore@example.com" },
    { "id": "12", "name": "James", "surname": "Jackson", "phoneNumber": "12345678912", "email": "james.jackson" },
    { "id": "13", "name": "Sarah", "surname": "White", "phoneNumber": "12345678913", "email": "sarah.white@example.com" },
    { "id": "14", "name": "Mark", "surname": "Harris", "phoneNumber": "12345678914", "email": "mark.harris@example.com" },
    { "id": "15", "name": "Lisa", "surname": "Martin", "phoneNumber": "12345678915", "email": "lisa.martin@example.com" },
    { "id": "16", "name": "Steven", "surname": "Thompson", "phoneNumber": "12345678916", "email": "steven.thompson@example.com" },
    //{ "id": "17", "name": "Patricia", "surname": "Garcia", "phoneNumber": "12345678917", "email": "patricia.garcia@example.com" },
    { "id": "18", "name": "Charles", "surname": "Martinez", "phoneNumber": "12345678918", "email": "charles.martinez@example.com" },
    { "id": "19", "name": "Jessica", "surname": "Robinson", "phoneNumber": "12345678919", "email": "jessica.robinson@example.com" },
    { "id": "20", "name": "Thomas", "surname": "Clark", "phoneNumber": "12345678920", "email": "thomas.clark@example.com" },
    { "id": "21", "name": "Karen", "surname": "Rodriguez", "phoneNumber": "12345678921", "email": "karen.rodriguez@example.com" },
    { "id": "22", "name": "Daniel", "surname": "Lewis", "phoneNumber": "12345678922", "email": "daniel.lewis@example.com" },
    { "id": "23", "name": "Nancy", "surname": "Lee", "phoneNumber": "12345678923", "email": "nancy.lee@example.com" },
    { "id": "24", "name": "Matthew", "surname": "Walker", "phoneNumber": "12345678924", "email": "matthew.walker@example.com" },
    { "id": "25", "name": "Betty", "surname": "Hall", "phoneNumber": "12345678925", "email": "betty.hall@example.com" },
    { "id": "26", "name": "George", "surname": "Allen", "phoneNumber": "12345678926", "email": "george.allen@example.com" },
    { "id": "27", "name": "Barbara", "surname": "Young", "phoneNumber": "12345678927", "email": "barbara.young@example.com" },
    { "id": "28", "name": "Joshua", "surname": "King", "phoneNumber": "12345678928", "email": "joshua.king@example.com" },
    { "id": "29", "name": "Megan", "surname": "Scott", "phoneNumber": "12345678929", "email": "megan.scott@example.com" },
    { "id": "30", "name": "Justin", "surname": "Green", "phoneNumber": "12345678930", "email": "justin.green@example.com" },
    { "id": "31", "name": "Betty", "surname": "Adams", "phoneNumber": "12345678931", "email": "betty.adams@example.com" },
    { "id": "32", "name": "Brandon", "surname": "Baker", "phoneNumber": "12345678932", "email": "brandon.baker@example.com" },
    { "id": "33", "name": "Rebecca", "surname": "Gonzalez", "phoneNumber": "12345678933", "email": "rebecca.gonzalez@example.com" },
    { "id": "34", "name": "Emma", "surname": "Nelson", "phoneNumber": "12345678934", "email": "emma.nelson@example.com" },
    { "id": "35", "name": "Jacob", "surname": "Carter", "phoneNumber": "12345678935", "email": "jacob.carter@example.com" },
    { "id": "36", "name": "Olivia", "surname": "Mitchell", "phoneNumber": "12345678936", "email": "olivia.mitchell@example.com" },
    { "id": "37", "name": "Ethan", "surname": "Perez", "phoneNumber": "12345678937", "email": "ethan.perez@example.com" },
    { "id": "38", "name": "Sophia", "surname": "Roberts", "phoneNumber": "12345678938", "email": "sophia.roberts@example.com" },
    { "id": "39", "name": "Mason", "surname": "Turner", "phoneNumber": "12345678939", "email": "mason.turner@example.com" },
    { "id": "40", "name": "Isabella", "surname": "Phillips", "phoneNumber": "12345678940", "email": "isabella.phillips@example.com" },
    { "id": "41", "name": "Logan", "surname": "Campbell", "phoneNumber": "12345678941", "email": "logan.campbell@example.com" },
    { "id": "42", "name": "Mia", "surname": "Parker", "phoneNumber": "12345678942", "email": "mia.parker@example.com" },
    { "id": "43", "name": "Alexander", "surname": "Evans", "phoneNumber": "12345678943", "email": "alexander.evans@example.com" },
    { "id": "44", "name": "Harper", "surname": "Edwards", "phoneNumber": "12345678944", "email": "harper.edwards@example.com" },
    { "id": "45", "name": "Elijah", "surname": "Collins", "phoneNumber": "12345678945", "email": "elijah.collins@example.com" }
]

const randomTimeout = (maxTimeout) => {
    return Math.floor(Math.random() * maxTimeout)
}

const maxTimeout = parseInt(process.env.MAX_TIMEOUT) || 1000

const getContact = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(contacts.find(contact => contact.id === id)), randomTimeout(maxTimeout))
    })
}

export default getContact
export {getContact}
