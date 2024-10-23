module.exports = {
	apps: [
		{
			name: 'API NOTIFY CHALLENGE',
			script: './src/index.js',
			interpreter: '/root/.nvm/versions/node/v20.18.0/bin/node',
			env: {
				NODE_ENV: 'production',
				HOST: '0.0.0.0',
				PORT: '9090',
				SUCCESS_RATE: '90',
				MAX_CONTACT_TIMEOUT: '500',
				MAX_NOTIFY_TIMEOUT: '300'
			}
		}

	]
};
