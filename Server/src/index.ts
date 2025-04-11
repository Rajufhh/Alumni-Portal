import dotenv from 'dotenv'
import { connectDB } from './db/index.db';
import app from './app';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { initSocketIO } from './socket/socket';
import { handleSocketAuth } from './middlewares/socket.middlewares';

dotenv.config();
const PORT = process.env.PORT || 3000;  

const httpServer = createServer(app);

export const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true
    }
});

app.set("io", io);

handleSocketAuth(io);
initSocketIO(io);


connectDB()
    .then(() => {
        httpServer.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    })
    .catch((error) => {
        console.error("MONGODB_CONNECTION_ERROR", error);
    })  