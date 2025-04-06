import { useState } from "react";
import {
  FaBirthdayCake, FaLinkedin, FaGithub, FaUserCheck, FaUserPlus,
  FaGraduationCap
} from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import userIcon from "@/assets/user-icon.svg";
import userIconDark from "@/assets/user-icon-dark.svg";

type ViewProfileProps = {
  profileId: string;
  isOwnProfile: boolean;
};

export const ViewProfile = ({ profileId, isOwnProfile }: ViewProfileProps) => {
  const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);

  console.log(profileId);
  
  const profileData = {
    firstName: "Himawari",
    lastName: "Habib",
    email: "himawari@example.com",
    dob: "2010-06-01",
    location: "Pune, India",
    graduationYear: "2025",
    role: "Alumni",
    linkedin: "https://linkedin.com/in/benny343333",
    github: "https://github.com/donki343333",
    bio: "Frontend enthusiast passionate about clean UI, accessibility, and seamless user experience.",
    skills: ["React", "CSS", "JS", "Team Collaboration", "UI/UX Design"],
    connections: 12,
  };

  const [isConnected, setIsConnected] = useState(false);
  const [connectionCount, setConnectionCount] = useState(profileData.connections);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md dark:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-neutral-700 pb-4 mb-6">
        <div className="flex gap-4 items-center">
          <img src={isDarkMode ? userIconDark : userIcon} className="w-12 h-12" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {profileData.firstName} {profileData.lastName}
            </h2>
            <span className="text-sm dark:text-gray-300 text-gray-500 ml-2">
              {connectionCount} connections
            </span>
          </div>
        </div>

        {/* Only show Connect button if not own profile */}
        {!isOwnProfile && (
          <button
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition
              ${isConnected
                ? "bg-gray-900 text-white dark:bg-white dark:text-black border-black dark:border-white"
                : "bg-white text-black dark:bg-black dark:text-white border-black dark:border-white"}`}
            onClick={() => {
              setIsConnected(!isConnected);
              setConnectionCount((prev) => (isConnected ? prev - 1 : prev + 1));
            }}
          >
            {isConnected ? <FaUserCheck /> : <FaUserPlus />}
            {isConnected ? "Connected" : "Connect"}
          </button>
        )}
      </div>

      {/* Bio */}
      <div className="mb-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {profileData.bio}
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-gray-700 dark:text-gray-300 mb-6">
        <ProfileDetail icon={<IoMailOpenOutline />} label="Email" value={profileData.email} />
        <ProfileDetail icon={<FaBirthdayCake />} label="DOB" value={profileData.dob} />
        <ProfileDetail icon={<FaLocationDot />} label="Location" value={profileData.location} />
        <ProfileDetail icon={<FaGraduationCap />} label="Graduation" value={profileData.graduationYear} />
        <ProfileDetail icon={<MdWork />} label="Role" value={profileData.role} />
        <ProfileDetail
          icon={<FaLinkedin />}
          label="LinkedIn"
          value={
            <a
              href={profileData.linkedin}
              target="_blank"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              View Profile
            </a>
          }
        />
        <ProfileDetail
          icon={<FaGithub />}
          label="GitHub"
          value={
            <a
              href={profileData.github}
              target="_blank"
              className="text-gray-800 hover:underline dark:text-gray-300"
            >
              View Profile
            </a>
          }
        />
      </div>

      {/* Skill Badges */}
      <div>
        <h3 className="text-base font-medium text-gray-800 dark:text-gray-100 flex items-center gap-2 mb-3">
          <GiSkills /> Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {profileData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-xs font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileDetail = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-start gap-2">
    <div className="mt-0.5 text-gray-500 dark:text-gray-400">{icon}</div>
    <div>
      <div className="font-medium text-gray-800 dark:text-gray-100">{label}:</div>
      <div>{value}</div>
    </div>
  </div>
);
