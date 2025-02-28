import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const URI = process.env.MONGO_CONNECTION_STRING ?? "";
        console.log(URI);
        await mongoose.connect(URI);
        console.log("MongoDB Connected!");
    }
    catch(error: unknown) {
        console.error("MONGODB_CONNECTION_ERROR", error);
    }
};