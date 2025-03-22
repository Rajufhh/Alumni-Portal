import dotenv from 'dotenv'
import { connectDB } from './db/index.db';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    })
    .catch((error) => {
        console.error("MONGODB_CONNECTION_ERROR", error);
    })  