import { useState } from "react";
import { IoIosAttach, IoIosSend } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";

interface MessageUser {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
}

interface ChatMessage {
  sender: "you" | "them";
  text: string;
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

export const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<MessageUser | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (): void => {
    if (!newMessage.trim()) return;
    setChatMessages((prev) => [...prev, { sender: "you", text: newMessage }]);
    setNewMessage("");
  };

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
      {/* Inbox */}
      <div className="w-[40%] p-6 border-r border-gray-200 dark:border-gray-800 overflow-y-auto bg-gray-50 dark:bg-neutral-900">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Inbox
        </h2>
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleSelectChat(msg)}
            className={`flex items-center gap-3 p-3 mb-2 rounded-lg cursor-pointer border transition-all ${
              selectedChat?.id === msg.id
                ? "bg-neutral-200 dark:bg-neutral-700 border-neutral-500"
                : "bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            }`}
          >
            <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <div className="font-semibold text-gray-800 dark:text-white">{msg.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{msg.lastMessage}</div>
            </div>
            <div className="text-xs text-gray-400">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Chat */}
      <div className="w-[60%] flex flex-col p-6 bg-white dark:bg-black">
        {selectedChat ? (
          <div className="flex flex-col flex-1 h-full">
            {/* Header */}
            <div className="pb-4 border-b border-gray-200 dark:border-neutral-800 text-center text-lg font-semibold text-gray-900 dark:text-white">
              {selectedChat.name}
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 max-h-[calc(95vh-210px)]">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[65%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "you"
                      ? "bg-gray-100 dark:bg-neutral-700 self-end text-gray-900 dark:text-white"
                      : "bg-gray-200 dark:bg-neutral-800 self-start text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center border-t pt-4 border-gray-200 dark:border-neutral-800">
              <button className="text-xl text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                <BsEmojiSmile />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 mx-4 px-4 py-2 rounded-full border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-gray-800 dark:text-white outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="text-xl text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                  <IoIosAttach />
                </button>
                <button
                  onClick={handleSend}
                  className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full font-medium hover:opacity-90 transition"
                >
                  <IoIosSend />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-xl text-gray-400 dark:text-gray-500 font-medium text-center">
            Send a message to start chat
          </div>
        )}
      </div>
    </div>
  );
};
