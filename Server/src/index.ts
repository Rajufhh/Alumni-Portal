import dotenv from 'dotenv'
import { connectDB } from './db/index.db';
import app from './app';
import { createServer } from 'http';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import type { Socket as IOSocket } from 'socket.io';

dotenv.config();
const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: true
    }
})

io.use((socket, next) => {
    const token = socket.handshake.auth.token;

    if (!token){
        return next(new Error("Authentication Error: No token provided"));
    }

    try {
        const secret = process.env.ACCESS_TOKEN_SECRET;

        if (!secret){
            return next(new Error("Authentication Error: No token provided"));
        }

        const decodedToken = jwt.verify(token, secret as string) as { _id: mongoose.Types.ObjectId, role: string };
        (socket as any).userId = decodedToken._id.toString();
        next();
    }
    catch (error){
        next(new Error("Authentication error: Invalid token"));
    }
});

io.on("connection", (socket) => {
    const userId = (socket as any).userId;
    console.log(`User ${userId} is now online as: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User ${userId} disconnected`);
    });
})

connectDB()
    .then(() => {
        httpServer.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    })
    .catch((error) => {
        console.error("MONGODB_CONNECTION_ERROR", error);
    })  