import { io } from 'socket.io-client'

export const initializeSocket = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    return io('http://localhost:3000', {
        auth:{ accessToken },
        transports: ['websocket'],
        autoConnect: false
    });
};