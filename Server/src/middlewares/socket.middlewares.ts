import { ExtendedError, Server } from "socket.io";
import { CustomSocket } from "../socket/socket";
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

export const handleSocketAuth = (io: Server) => {
    io.use((socket: CustomSocket , next: (err?: ExtendedError) => void) => {
        const token = socket.handshake.auth.accessToken;

        console.log("in socket middleware");
    
        if (!token){
            return next(new Error("Authentication Error: No token provided"));
        }
    
        try {
            const secret = process.env.ACCESS_TOKEN_SECRET;
    
            if (!secret){
                return next(new Error("Authentication Error: No token provided"));
            }
    
            const decodedToken = jwt.verify(token, secret as string) as { _id: mongoose.Types.ObjectId, role: string };
            socket.user = decodedToken;
            
            next();
        }
        catch (error){
            next(new Error("Authentication error: Invalid token"));
        }
    });
}
