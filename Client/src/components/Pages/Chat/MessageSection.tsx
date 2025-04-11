import { Dispatch, SetStateAction, useState } from "react";
import { ChatMessage, MessageUser } from "./Chat";
import { Message } from "./Message";
import { MessageInput } from "./MessageInput";

interface messageProps {
    setChatMessages: Dispatch<SetStateAction<ChatMessage[]>>;
    selectedChat: MessageUser | null;
    chatMessages: ChatMessage[];
}

export const MessageSection = ({ setChatMessages, selectedChat, chatMessages }: messageProps) => {
  const [newMessage, setNewMessage] = useState("");
  


    const handleSend = (): void => {
        if (!newMessage.trim()) return;
        setChatMessages((prev) => [...prev, { sender: "you", text: newMessage }]);
        setNewMessage("");
    };

       

  return (
        <div className="flex flex-col flex-1 h-full">
            <div className="pb-4 border-b border-gray-200 dark:border-neutral-800 text-center text-lg font-semibold text-gray-900 dark:text-white">
              {selectedChat?.name}
            </div>

            <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 max-h-[calc(95vh-210px)]">
              {chatMessages.map((msg) => (
                <Message key={msg.text} sender={msg.sender} text={msg.text} />
              ))}
            </div>

            <MessageInput setNewMessage={setNewMessage} newMessage={newMessage} handleSend={handleSend} />
          </div>
  )
}
