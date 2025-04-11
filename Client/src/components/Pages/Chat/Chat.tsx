import { useState } from "react";
import { MessageSection } from "./MessageSection";
import { ChatSidebar } from "./ChatSidebar";

export interface MessageUser {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
}



const messages: MessageUser[] = [
  {
    id: 1,
    name: "Megh Gaidhani",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Max Payne",
    time: "11:37 AM",
  },
  {
    id: 2,
    name: "Shah Rukh Khan",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Can I cast you in my next movie?",
    time: "10:12 AM",
  },
];

export interface ChatMessage {
  sender: "you" | "them";
  text: string;
}

export const Chat = () => { 
  const [selectedChat, setSelectedChat] = useState<MessageUser | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);


  const handleSelectChat = (msg: MessageUser): void => {
    setSelectedChat(msg);
    setChatMessages([
      { sender: "you", text: `Hi ${msg.name}!` },
      { sender: "them", text: "Hello 😄" },
      { sender: "you", text: "How are you?" },
      { sender: "them", text: "Doing great! What about you?" },
    ]);
  }; 

  return (
    <div className="flex h-[95vh] w-full font-poppins bg-white dark:bg-black">

      {
        <ChatSidebar handleSelectChat={handleSelectChat} selectedChat={selectedChat} messages={messages} />
      }

      <div className="w-[60%] hidden md:flex flex-col p-6 bg-white dark:bg-black">
        {          
          selectedChat ? 
          <MessageSection setChatMessages={setChatMessages} selectedChat={selectedChat} chatMessages={chatMessages} />  
          : (
          <div className="flex-1 flex items-center justify-center text-xl text-gray-400 dark:text-gray-500 font-medium text-center">
            Send a message to start chat
          </div>
        )}
      </div>
    </div>
  );
};
