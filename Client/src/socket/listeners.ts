import { Socket } from "socket.io-client";
import { ChatEventsEnum } from "./chatEvents";

export const mountSocketListeners = (socket: Socket) => {

    socket.on(ChatEventsEnum.CONNECT, () => {
        console.log("Socket connected");
    });

    socket.on(ChatEventsEnum.DISCONNECT, () => {
        console.log("Socket disconnected");
    });

};