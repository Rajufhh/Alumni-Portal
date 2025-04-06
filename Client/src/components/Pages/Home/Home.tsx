import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useNavigate } from "react-router";
import { UserProfileCard } from "./UserProfileCard";
// import userIcon from "../../../assets/user-icon.svg"
// import userIconDark from "../../../assets/user-icon-dark.svg"
import { Post } from "./Post";
import { PostForm } from "./PostForm";
import { UpcomingEvents } from "./UpcomingEvents";
import { Connections } from "./Connections";

export interface Post {
  id: number;
  user: string;
  content: string;
  likes: number;
}

export const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { user, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  
  useEffect(() => {      
      console.log(user);
      if (!loading && user === null){
            console.log("!user");
          navigate("/");
      }
  }, [user, loading, navigate]);

  useEffect(() => {
    setPosts([
        { id: 1, user: "ShahRukh Khan", content: "Kashmir’s beauty...", likes: 0 },
        { id: 2, user: "Aman Mehta", content: "College is all about...", likes: 0 },
        { id: 3, user: "Arushi Pragya", content: "Between classes...", likes: 0 },
        { id: 4, user: "Pranali Habib", content: "Is there anything...", likes: 0 },
    ]);
    }, []);

    const handlePost = (content: string) => {
      if (!user) return;

      setPosts(prev => [
        ...prev, 
        { id: 0, user: user.firstName + " " + user.lastName, content: content, likes: 0 }
      ]);
    }

  console.log(user);

    return (
    <div className="w-full min-h-screen dark:bg-[#000000] bg-[#e6e9da] dark:text-white text-black"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 px-4 md:px-10 py-6">

        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <UserProfileCard />
        </div>
  
        {/* Center Feed */}
        <div className="md:col-span-2 space-y-6">

          <PostForm handlePost={handlePost} />

          {posts.map((post, index) => (
            <Post key={index}
              id={post.id}
              owner={{ firstName: post.user, lastName: "", _id: "", profileImageURL: ""}}
              content={post.content}
              likes={post.likes}
            />
          ))}


        </div>
  
        {/* Right Sidebar */}
        <div className="md:col-span-1 space-y-6">  

          <UpcomingEvents />
          <Connections />

        </div>
      </div>
    </div>
  );  
};