import React from "react";
import { useState } from "react";
import Sunflower from "../assets/sunflower.jpg";
import { FaUserFriends } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import "./ViewProfile.css";

function ViewProfile() {
  const profileData = {
    username: "himawari_habib",
    fullName: "Himawari Habib",
    email: "himawari@example.com",
    dob: "2010-06-01",
    phone: "123-456-7890",
    location: "Pune, China",
    graduationYear: "2025",
    institute: "XYZ University",
    role: "Alumni",
    linkedin: "https://linkedin.com/in/benny343333",
    github: "https://github.com/donki343333",
    skills: ["React", "CSS", "JS", "Team Collaboration", "UI/UX Design"],
    connections: 12,
  };

  const [isConnected, setIsConnected] = useState(false);
  const [connectionCount, setConnectionCount] = useState(profileData.connections);

  return (
    <div className="view-profile-wrapper">
      <div className="sidebar">
        <img src={Sunflower} className="profile-photo" alt="Profile" />
        <h2>{profileData.fullName}</h2>
        <p className="role">{profileData.role}</p>

        <div className="profile-options">
          <button className="profile-option active">
            <FaHouseUser /> View Profile
          </button>
          <button className="profile-option">
            <FaMessage /> Message
          </button>
          <div className="connections-count">
            <FaUserFriends /> {connectionCount} Connections
          </div>
        </div>
      </div>

      <div className="view-profile-main">
        <div className="form-wrapper">
          <div className="top-header">
            <h2>About</h2>
            <button
              className={`connect-btn ${isConnected ? "connected" : ""}`}
              onClick={() => {
                setIsConnected(!isConnected);
                setConnectionCount((prev) =>
                  isConnected ? prev - 1 : prev + 1
                );
              }}
            >
              {isConnected ? <FaUserCheck /> : <FaUserPlus />}
            </button>
          </div>

          <div className="profile-grid">
            <div className="detail">
              <strong>
                <FaUserAlt /> Username:
              </strong>{" "}
              {profileData.username}
            </div>
            <div className="detail">
              <strong>
                <IoMailOpenOutline /> Email:
              </strong>{" "}
              {profileData.email}
            </div>
            <div className="detail">
              <strong>
                <FaBirthdayCake /> DOB:
              </strong>{" "}
              {profileData.dob}
            </div>
            <div className="detail">
              <strong>
                <FaPhoneAlt /> Phone:
              </strong>{" "}
              {profileData.phone}
            </div>
            <div className="detail">
              <strong>
                <FaLocationDot /> Location:
              </strong>{" "}
              {profileData.location}
            </div>
            <div className="detail">
              <strong>
                <FaGraduationCap /> Graduation:
              </strong>{" "}
              {profileData.graduationYear}
            </div>
            <div className="detail">
              <strong>
                <FaUniversity /> Institute:
              </strong>{" "}
              {profileData.institute}
            </div>
            <div className="detail">
              <strong>
                <MdWork /> Role:
              </strong>{" "}
              {profileData.role}
            </div>
            <div className="detail">
              <strong>
                <FaLinkedin /> LinkedIn:
              </strong>{" "}
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </div>
            <div className="detail">
              <strong>
                <FaGithub /> GitHub:
              </strong>{" "}
              <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </div>
          </div>

          <div className="skills-section">
            <h3>
              <GiSkills /> Skill Set
            </h3>
            <ul className="descriptive-skills">
              <li>
                <strong>React:</strong> Hands-on experience building modern,
                dynamic web apps using React. Skilled in writing functional
                components, managing state with hooks and context, and
                optimizing performance for seamless user experiences.
              </li>
              <li>
                <strong>CSS:</strong> Well-versed in modern CSS techniques
                including Flexbox, Grid, media queries, animations, and
                transitions. Capable of creating responsive, visually appealing,
                and pixel-perfect UIs that adapt beautifully across devices.
              </li>
              <li>
                <strong>JS:</strong>Proficient in writing clean, efficient
                JavaScript code using ES6+ features. Strong understanding of
                closures, promises, async/await, and event handling. Able to
                build interactive interfaces and integrate APIs effectively.
              </li>
              <li>
                <strong>Team Collaboration:</strong> Great at collaborating with
                diverse teams using version control systems like Git.
                Communicates clearly, adapts quickly, and actively contributes
                to shared goals during agile sprints, code reviews, and
                brainstorming sessions.
              </li>
              <li>
                <strong>UI/UX Design:</strong>Focused on crafting intuitive and
                accessible user experiences. Understands design principles, user
                flows, and wireframing. Prioritizes user feedback and aesthetics
                to create interfaces that are both beautiful and functional.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;