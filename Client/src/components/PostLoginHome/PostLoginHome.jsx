import React, { useState, useEffect } from 'react';
import { BiSolidMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiSuitcase } from "react-icons/gi";
import { FaCalendarDay } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import './PostLoginHome.css';
import tulip from "../assets/tulip.jpg";
import sunflower from "../assets/sunflower.jpg";
import rose from "../assets/rose.jpg";
import microsoft from "../assets/microsoft-logo.jpg";
import deloitte from "../assets/deloitte-logo.png";
import opkey from "../assets/opkey-logo.jpeg"
import google from "../assets/google-logo.png"
import phillips from "../assets/phillips-logo.png"

function PostLoginHome() {
    const [posts, setPosts] = useState([]);

    const jobs = [
        { title: "Product Designer", 
          company: "Opkey", 
          image:opkey
        },
        { title: "Data Engineer", 
          company: "Philips",
          image:phillips 
        },
        { title: "Data Analyst", 
          company: "Google",
          image:google
        },
        { title: "Web developer", 
          company: "Microsoft",
          image:microsoft
        },
        { title: "Software Engineer", 
          company: "Deloitte",
          image:deloitte
        }
    ];

    const [comments, setComments] = useState({});
    const [activePostId, setActivePostId] = useState(null);
    const [commentInput, setCommentInput] = useState("");

    
    const alumni = [
        {
          id: 1,
          name: "Pranali Habib",
          college: "NIT Kashmir",
          image: tulip,
          city: "Gulmarg, Kashmir"
        },
        {
          id: 2,
          name: "Toiub Khan",
          college: "BITS Pilani",
          image: sunflower,
          city: "Hyderabad, Telangana"
        },
        {
          id: 3,
          name: "Aman Mehta",
          college: "NIT Trichy",
          image: rose,
          city: "Ahmedabad, Gujarat"
        }
      ];
      
      const options = [
        { id: 1, label: "Edit Profile", icon: <FaUser /> },
        { id: 2, label: "Post a Job", icon: <GiSuitcase /> },
        { id: 3, label: "RSVP to Events", icon: <FaCalendarDay /> },
        { id: 4, label: "Alumni Directory", icon: <FaGoogleScholar /> },
        { id: 5, label: "Alumni Meetup", icon: <FaHandshake /> }
      ];
      

    const events = [
        { name: "Mobile Trends Conference 2025", date: "Thu, Mar 27, 2025, 1:30 PM" },
        { name: "3-Day Leadership & Management Program", date: "Thu, Mar 27, 2025, 10:30 AM" },
    ];

    const toggleCommentBox = (postId) => {
        setActivePostId(activePostId === postId ? null : postId);
    };
    
    const handleAddComment = (postId) => {
        if (commentInput.trim() === "") return;
        setComments(prev => ({
            ...prev,
            [postId]: [...(prev[postId] || []), commentInput]
        }));
        setCommentInput("");
        setActivePostId(null);
    };
    

    useEffect(() => {
        const fetchedPosts = [
            { id: 1, user: "ShahRukh Khan", content: "Kashmir’s beauty is unmatched, where mountains meet the sky and serenity reigns. Let’s hope for peace and prosperity for all its people. ", hashtags: "#Kashmir #Peace #Love", likes: 0 },
            { id: 2, user: "Aman Mehta", content: "College is all about balancing classes, social life, and trying to get enough sleep... key word being 'trying.' Here’s to the endless grind and the occasional nap. ", hashtags: "#CollegeLife #SleepDeprived #StudentStruggles", likes: 0 },
            { id: 3, user: "Arushi Pragya", content: "Between classes, projects, and finding time for fun, college life can feel like a blur. But it’s these moments – the friendships, the laughter, the growth – that make it all worth it.", hashtags: "#CollegeLife #Growth #Memories", likes: 0 },
            { id: 4, user: "Pranali Habib", content: "Is there anything more satisfying than finishing an essay 10 minutes before the deadline? Other than taking a nap afterward, of course.", hashtags: "#CollegeStruggles #ProcrastinationNation #LastMinuteMagic", likes: 0 },
            { id: 5, user: "Harshada Borse", content: "Some days, it feels like I’m juggling ten things at once, and other days, I’m just wondering where I put my coffee. College life is full of surprises, good and bad!", hashtags: "#CollegeVibes #CoffeeFirst #AlwaysBusy", likes: 0 },
            { id: 6, user: "Atharva Urde", content: "College: Where every day is an adventure, whether you’re figuring out your class schedule or running to make it to an exam on time. Here’s to making it through and still managing to have fun!", hashtags: "#CollegeVibes #AdventuresInLearning #TimeManagement", likes: 0 },
        ];
        setPosts(fetchedPosts);
    }, []);

    const handleLike = (postId) => {
        setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
    };

    return (
        <div className="container" style={{ overflowX: 'hidden' }}>
            {/* Navbar */}
            <nav className="navbar">
                <div className="search-wrapper">
                    <CiSearch className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="nav-links">
                    <a href="#" className="active">Home</a>
                    <a href="#">Directory</a>
                    <a href="#">Events</a>
                    <a href="#">Job Board</a>
                </div>
                <div className="nav-icons">
                <BiSolidMessage />
                <CgProfile/>
                </div>
            </nav>

            {/* Main Content */}
            <div className="main-content">
                {/* Left Sidebar */}
                <div className="sidebar">
                <div className="card-container">
                        <div key={alumni[0].id} className="profile-card">
                            <img src={alumni[0].image} alt={alumni[0].name} />
                            <h2>{alumni[0].name}</h2>
                            <p>{alumni[0].college}</p>
                            <p>{alumni[0].city}</p>
                        </div>
                </div>
                <div className="menu">
                    {options.map((item) => (
                        <p key={item.id}>
                        {item.icon} {item.label}
                        </p>
                    ))}
                </div>
                </div>

                {/* Middle Section - Posts */}
                <div className="feed">
                    {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                        <img src="https://via.placeholder.com/40" alt="User" />
                        <p>{post.user}</p>
                    </div>
                    <p>{post.content}</p>
                    <p className="hashtags">{post.hashtags}</p>
                        <div className="post-actions">
                            <button onClick={() => handleLike(post.id)}><FaRegThumbsUp /> {post.likes}</button>
                            <span onClick={() => toggleCommentBox(post.id)}><FaComment /></span>
                        </div>

                        {/* 👇 Comment Input Box */}
                        {activePostId === post.id && (
                        <div className="comment-box">
                            <input
                                type="text"
                                placeholder="Write a comment..."
                                value={commentInput}
                                onChange={(e) => setCommentInput(e.target.value)}
                            />
                            <button onClick={() => handleAddComment(post.id)}>Post</button>
                        </div>
                        )}

                        {/* 👇 Comments Display */}
                        {comments[post.id]?.length > 0 && (
                        <div className="comment-section">
                            {comments[post.id].map((cmt, index) => (
                            <p key={index} className="comment">{cmt}</p>
                            ))}
                        </div>
                        )}
                    </div>
                ))}
            </div>

                {/* Right Sidebar */}
                <div className="sidebar">
                <div className="jobs-box">
                    <h3>Jobs Posted</h3>
                    <div className="jobs-list">
                        {jobs.map((job, index) => (
                        <div key={index} className="job-card">
                            <img src={job.image} alt="Company Logo" className="job-logo" />
                            <div className="job-info">
                                <h4>{job.title}</h4>
                                <p>{job.company}</p>
                            </div>
                        </div>
                      ))}
                    </div>
                </div>

                <div className="events-box">
                    <h3>Event Announcements</h3>
                    <div className="events-list">
                        {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-info">
                                <h4>{event.name}</h4>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default PostLoginHome;