import { useState } from "react";
import chatIcon from "../../../assets/chat-icon.svg"
import chatIconDark from "../../../assets/chat-icon-dark.svg"
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import connectIcon from "../../../assets/connect-icon.svg"
import connectIconDark from "../../../assets/connect-icon-dark.svg"
import userIconDark from "../../../assets/user-icon-dark.svg"
import userIcon from "../../../assets/user-icon.svg"

interface PostProps {
    id: number;
    owner: {
        firstName: string;
        lastName: string;
        profileImageURL: string;
        _id: string;
    };
    content: string;
    likes: number;
}

export const Post = ({ id, owner, content, likes }: PostProps) => {
    const [comments, setComments] = useState<Record<number, string[]>>({});
    const [activePostId, setActivePostId] = useState<number | null>(null);
    const [commentInput, setCommentInput] = useState<string>("");
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);

    const toggleCommentBox = (postId: number) => {
        setActivePostId(activePostId === postId ? null : postId);
    };

    const handleAddComment = (postId: number) => {
        if (commentInput.trim() === "") return;

        setComments((prev) => ({
            ...prev,
            [postId]: [...(prev[postId] || []), commentInput],
        }));

        setCommentInput("");
        setActivePostId(null);
    };


  return (
    <div className="dark:bg-[hsl(0,0%,8%)] bg-white  p-5 rounded-md dark:shadow-none shadow-xl space-y-2">
        <div className="flex items-center space-x-4 justify-between">
            <div className="flex items-center gap-4 text-sm">
                <img
                    src={owner.profileImageURL || (isDarkMode ? userIcon : userIconDark)}
                    className="rounded-full w-10 h-10"
                    alt="User"
                />
                <p className="font-semibold">{owner.firstName + ' ' + owner.lastName}</p>
            </div>

            <img src={isDarkMode ? connectIcon : connectIconDark} className="w-4 h-4 border border-none" />
        </div>

        <p className="pl-8 text-sm dark:text-gray-200 text-gray-800">{content}</p>

        <div className="flex justify-between items-center mt-2 px-2">
            <button
                className="flex items-center gap-1 text-red-400"
            >
                ❤️ {likes}
            </button>
            <div
                onClick={() => toggleCommentBox(id)}
                className="cursor-pointer text-gray-700"
            >
            <img src={isDarkMode ? chatIcon : chatIconDark} className="w-6 h-6" /> 
            </div>
        </div>

        {activePostId === id && (
        <div className="mt-2">
            <input
            className="w-full px-3 py-2 border rounded text-sm"
            type="text"
            placeholder="Write a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            />
            <button
            onClick={() => handleAddComment(id)}
            className="text-sm text-white bg-blue-600 px-3 py-1 mt-2 rounded"
            >
            Post
            </button>
        </div>
        )}

        {comments[id]?.length > 0 && (
        <div className="mt-2 space-y-1">
            {comments[id].map((cmt, index) => (
            <p key={index} className="text-sm text-gray-600">
                {cmt}
            </p>
            ))}
        </div>
        )}
    </div>
  )
}
