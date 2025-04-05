import React, { useState, useEffect } from "react";
import { GiSuitcase } from "react-icons/gi";
import { FaCalendarDay, FaGraduationCap, FaHandshake, FaComment, FaUser } from "react-icons/fa";
import microsoft from "../../../assets/microsoft-logo.jpg";
import deloitte from "../../../assets/deloitte-logo.png";
import opkey from "../../../assets/opkey_logo.jpeg";
import google from "../../../assets/google-logo.png";
import phillips from "../../../assets/phillips-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useNavigate } from "react-router";
import UserProfileCard from "./UserProfileCard";

interface Job {
  title: string;
  company: string;
  image: string;
}

interface Option {
  id: number;
  label: string;
  icon: React.ReactNode;
}

interface Event {
  name: string;
  date: string;
}

interface Post {
  id: number;
  user: string;
  content: string;
  hashtags: string;
  likes: number;
}

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Record<number, string[]>>({});
  const [activePostId, setActivePostId] = useState<number | null>(null);
  const [commentInput, setCommentInput] = useState<string>("");

  const { user, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  
  useEffect(() => {      
      if (!loading && user === null){
            console.log("!user");
          navigate("/welcome");
      }
  }, []);

  console.log(user);

  const jobs: Job[] = [
    { title: "Product Designer", company: "Opkey", image: opkey },
    { title: "Data Engineer", company: "Philips", image: phillips },
    { title: "Data Analyst", company: "Google", image: google },
    { title: "Web developer", company: "Microsoft", image: microsoft },
    { title: "Software Engineer", company: "Deloitte", image: deloitte },
  ];

  const options: Option[] = [
    { id: 1, label: "Edit Profile", icon: <FaUser /> },
    { id: 2, label: "Post a Job", icon: <GiSuitcase /> },
    { id: 3, label: "RSVP to Events", icon: <FaCalendarDay /> },
    { id: 4, label: "Alumni Directory", icon: <FaGraduationCap /> },
    { id: 5, label: "Alumni Meetup", icon: <FaHandshake /> },
  ];

  const events: Event[] = [
    { name: "Mobile Trends Conference 2025", date: "Thu, Mar 27, 2025, 1:30 PM" },
    { name: "3-Day Leadership & Management Program", date: "Thu, Mar 27, 2025, 10:30 AM" },
  ];

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

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)));
  };

  useEffect(() => {
    setPosts([
      { id: 1, user: "ShahRukh Khan", content: "Kashmir’s beauty...", hashtags: "#Kashmir #Peace #Love", likes: 0 },
      { id: 2, user: "Aman Mehta", content: "College is all about...", hashtags: "#CollegeLife", likes: 0 },
      { id: 3, user: "Arushi Pragya", content: "Between classes...", hashtags: "#CollegeLife", likes: 0 },
      { id: 4, user: "Pranali Habib", content: "Is there anything...", hashtags: "#CollegeStruggles", likes: 0 },
    ]);
  }, []);

    return (
    <div className="w-full min-h-screen dark:bg-[#000000] bg-[#e6e9da] dark:text-white text-black"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 px-4 md:px-10 py-6">

        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-6">

          <UserProfileCard />

          <div className="space-y-3 dark:bg-[#151515] bg-white p-4 rounded-xl dark:shadow-none shadow-xl">
            {options.map((item) => (
              <p key={item.id} className="flex items-center gap-3 dark:text-gray-300 text-black">
                {item.icon} {item.label}
              </p>
            ))}
          </div>
        </div>
  
        {/* Center Feed */}
        <div className="md:col-span-2 space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="dark:bg-[#151515] bg-white  p-5 rounded-xl dark:shadow-none shadow-xl space-y-2">
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  className="rounded-full w-10 h-10"
                  alt="User"
                />
                <p className="font-semibold">{post.user}</p>
              </div>
              <p>{post.content}</p>
              <p className="text-sm text-blue-500">{post.hashtags}</p>
              <div className="flex justify-between items-center mt-2">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1 text-red-400"
                >
                  ❤️ {post.likes}
                </button>
                <span
                  onClick={() => toggleCommentBox(post.id)}
                  className="cursor-pointer text-gray-700"
                >
                  <FaComment />
                </span>
              </div>
              {activePostId === post.id && (
                <div className="mt-2">
                  <input
                    className="w-full px-3 py-2 border rounded text-sm"
                    type="text"
                    placeholder="Write a comment..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <button
                    onClick={() => handleAddComment(post.id)}
                    className="text-sm text-white bg-blue-600 px-3 py-1 mt-2 rounded"
                  >
                    Post
                  </button>
                </div>
              )}
              {comments[post.id]?.length > 0 && (
                <div className="mt-2 space-y-1">
                  {comments[post.id].map((cmt, index) => (
                    <p key={index} className="text-sm text-gray-600">
                      {cmt}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Right Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <div className="dark:bg-[#151515] bg-white  p-4 rounded-xl dark:shadow-none shadow-xl">
            <h3 className="text-lg font-semibold mb-3">Jobs Posted</h3>
            {jobs.map((job, idx) => (
              <div key={idx} className="flex items-center space-x-4 mb-3">
                <img
                  src={job.image}
                  alt="Company Logo"
                  className="w-10 h-10 object-contain rounded-md"
                />
                <div>
                  <h4 className="font-medium">{job.title}</h4>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="dark:bg-[#151515] bg-white  p-4 rounded-xl dark:shadow-none shadow-xl">
            <h3 className="text-lg font-semibold mb-3">Event Announcements</h3>
            {events.map((event, idx) => (
              <div key={idx} className="mb-3">
                <h4 className="font-medium">{event.name}</h4>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );  
};