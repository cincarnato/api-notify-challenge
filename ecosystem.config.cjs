module.exports = {
	apps: [
		{
			name: 'API NOTIFY CHALLENGE',
			script: './src/index.js',
			instances: 1,
			env: {
				NODE_ENV: 'production',
				HOST: '0.0.0.0',
				PORT: '9090',
				SUCCESS_RATE: '90',
				MAX_TIMEOUT: '1000'
			}
		}

	]
};
