import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import UserIcon from "@/assets/user-icon.svg";
import UserIconDark from "@/assets/user-icon-dark.svg";
import { Paperclip, Smile, Image, Send } from "lucide-react";

export const PostForm = () => {
  const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  const postContent = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const temp = postContent.current;
    if (temp) {
      temp.style.height = "auto";
      temp.style.height = `${temp.scrollHeight}px`;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl shadow-md p-4 space-y-4 bg-white dark:bg-[#151515]">

      <div className="flex gap-3 items-start">

        <img
          src={isDarkMode ? UserIcon : UserIconDark}
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />

        <textarea
          ref={postContent}
          onInput={handleInput}
          rows={1}
          placeholder="What's on your mind?"
          className="px-2 flex-1 resize-none overflow-hidden bg-none outline-none text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />

      </div>

      <div className="flex justify-between items-center border-t pt-2 border-gray-200 dark:border-gray-700 transition-colors">

        <div className="flex gap-3 text-gray-500 dark:text-gray-400">
          <button className="cursor-pointer" title="Add image">
            <Image size={18} />
          </button>
          <button className="cursor-pointer" title="Attach file">
            <Paperclip size={18} />
          </button>
          <button className="cursor-pointer" title="Add emoji">
            <Smile size={18} />
          </button>
        </div>

        <button className="flex items-center gap-1 dark:bg-white bg-black dark:text-black text-white cursor-pointer text-sm px-4 py-1 rounded-full transition">
          <Send size={14} />
          <span>Post</span>
        </button>

      </div>
    </div>
  );
};