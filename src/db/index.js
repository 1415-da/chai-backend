import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        let mongoUri = process.env.MONGODB_URI || "127.0.0.1:27017";
        // ensure scheme
        if (!mongoUri.startsWith("mongodb://") && !mongoUri.startsWith("mongodb+srv://")) {
            mongoUri = `mongodb://${mongoUri}`;
        }

        // append DB name only if no database is specified in the URI
        const parts = mongoUri.split("/");
        // parts: ['mongodb:', '', 'host[:port]', 'optionalDb']
        const hasDb = parts.length > 3 && parts[3] && parts[3].length > 0;
        const connectionString = hasDb ? mongoUri : `${mongoUri}/${DB_NAME}`;

        console.log("Mongo connection string:", connectionString);
        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`Connected to MongoDB : ${connectionInstance.connection.host}`);
        return connectionInstance;
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        throw err;
    }
};

export default connectDB;