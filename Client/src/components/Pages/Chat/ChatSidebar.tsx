import { MessageUser } from "./Chat";

interface sidebarProps {
    handleSelectChat: (msg: MessageUser) => void;
    selectedChat: MessageUser | null;
    messages: MessageUser[];
}

export const ChatSidebar = ({ handleSelectChat, selectedChat, messages }: sidebarProps) => {
  return (
    <div className="w-full md:w-[40%] p-6 border-r border-gray-200 dark:border-gray-800 overflow-y-auto bg-gray-50 dark:bg-neutral-900">

        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
          Inbox
        </h2>

        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleSelectChat(msg)}
            className={`flex items-center gap-3 p-3 mb-2 rounded-sm cursor-pointer border transition-all ${
              selectedChat?.id === msg.id
                ? "bg-neutral-200 dark:bg-neutral-700 border-neutral-500"
                : "bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            }`}
          >

          <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full" />

            <div className="flex flex-col w-full gap-1">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-gray-800 dark:text-white">{msg.name}</div>
            <div className="text-xs text-gray-400">{msg.time}</div>
            </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{msg.lastMessage}</div>
            </div> 
          </div>

        ))}
      </div>
  )
}
