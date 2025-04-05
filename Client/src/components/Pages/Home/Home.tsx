import { useState, useEffect } from "react";
import microsoft from "../../../assets/microsoft-logo.jpg";
import deloitte from "../../../assets/deloitte-logo.png";
import opkey from "../../../assets/opkey_logo.jpeg";
import google from "../../../assets/google-logo.png";
import phillips from "../../../assets/phillips-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useNavigate } from "react-router";
import { UserProfileCard } from "./UserProfileCard";
// import userIcon from "../../../assets/user-icon.svg"
// import userIconDark from "../../../assets/user-icon-dark.svg"
import { Post } from "./Post";
import { PostForm } from "./PostForm";
import { UpcomingEvents } from "./upcomingEvents";

interface Job {
  title: string;
  company: string;
  image: string;
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

  const { user, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  
  useEffect(() => {      
      if (!loading && user === null){
            console.log("!user");
          navigate("/welcome");
      }
  }, []);

  useEffect(() => {
    setPosts([
        { id: 1, user: "ShahRukh Khan", content: "Kashmir’s beauty...", hashtags: "Kashmir Peace Love", likes: 0 },
        { id: 2, user: "Aman Mehta", content: "College is all about...", hashtags: "CollegeLife", likes: 0 },
        { id: 3, user: "Arushi Pragya", content: "Between classes...", hashtags: "CollegeLife", likes: 0 },
        { id: 4, user: "Pranali Habib", content: "Is there anything...", hashtags: "CollegeStruggles", likes: 0 },
    ]);
    }, []);

  console.log(user);

  const jobs: Job[] = [
    { title: "Product Designer", company: "Opkey", image: opkey },
    { title: "Data Engineer", company: "Philips", image: phillips },
    { title: "Data Analyst", company: "Google", image: google },
    { title: "Web developer", company: "Microsoft", image: microsoft },
    { title: "Software Engineer", company: "Deloitte", image: deloitte },
  ];

    return (
    <div className="w-full min-h-screen dark:bg-[#000000] bg-[#e6e9da] dark:text-white text-black"> 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 px-4 md:px-10 py-6">

        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-6">

          <UserProfileCard />

          {/* <div className="space-y-3 dark:bg-[#151515] bg-white p-4 rounded-xl dark:shadow-none shadow-xl">
            {options.map((item) => (
              <p key={item.id} className="flex items-center gap-3 dark:text-gray-300 text-black">
                {item.icon} {item.label}
              </p>
            ))}
          </div> */}
        </div>
  
        {/* Center Feed */}
        <div className="md:col-span-2 space-y-6">

          <PostForm />

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

        </div>
      </div>
    </div>
  );  
};