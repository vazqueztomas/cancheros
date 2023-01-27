const DB = require('mongoose');
const connectionString = process.env.NODE_ENV === 'development' ? process.env.DB_DEVELOPMENT : process.env.DB_PRODUCTION;

const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectDB = async () => {
	try {
		await DB.connect(connectionString, dbOptions);
		console.log(`Database connection successful: (${process.env.NODE_ENV} mode).`);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = connectDB;