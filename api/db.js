const DB = require('mongoose');
const connectionString = process.env.DB_DEVELOPMENT || 'mongodb+srv://admin:aguanteboca21@cluster0.5uta9zr.mongodb.net/?retryWrites=true&w=majority';

const dbOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectDB = async () => {
	try {
		await DB.connect(connectionString, dbOptions);
		console.log(`Database connection successful).`);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = connectDB;