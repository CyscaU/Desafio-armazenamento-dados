const mongoose = require("mongoose");
DB_URL = process.env.MONGO_URL;
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL, {
        });

        console.log(`Base de dados conectada: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;
