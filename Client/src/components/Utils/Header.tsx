import logo from "../../assets/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { clearUser } from "@/store/userSlice"
import { RootState } from "@/store/Store"
import { useEffect, useState } from "react"
import { toggleMode } from "@/store/configSlice"
import { FaUserCircle } from "react-icons/fa"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { BsSunFill, BsMoon } from "react-icons/bs"

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const { user } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const navItems = [
        { path: "/home", label: "Home" },
        { path: "/events", label: "Events" },
        { path: "/jobs", label: "Jobs" },
        { path: "/articles", label: "Articles" },
        { path: "/find-mentor", label: "Find Mentor" },
        { path: "/alumni-directory", label: "Alumni Directory" },
        { path: "/gallery", label: "Gallery" },
        { path: "/resources", label: "Resources" }
    ];

    const handleLogout = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");

            const response = await axios.post("http://localhost:3000/api/logout", {}, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 200) {
                dispatch(clearUser());
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                navigate("/");
            } else {
                console.log("Failed to log out");
            }
        } catch (error) {
            console.error("Error while logging out", error)
        }
    };

    const handleModeToggle = () => {
        dispatch(toggleMode());
    }
    const toggleDropdown = () => setDropdownVisibility(prev => !prev);

    return (
        <nav className="sticky flex flex-wrap items-center justify-between w-full px-6 py-4 dark:bg-black/70 bg-white/40 text-black backdrop-blur-md shadow-md top-0 z-50">
            <div className="flex gap-3 items-center">
                <img src={logo} className="w-12 h-12" />
                <h1 className="text-2xl font-bold text-black dark:text-white font-mono">Alumni Connect</h1>
            </div>

            <ul className="lg:flex gap-6 text-sm hidden">
                {navItems.map(item => (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `${isActive ? 'dark:text-white text-black font-semibold' : 'dark:text-gray-400 text-gray-600'} cursor-pointer dark:hover:text-white hover:text-black transition`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="flex gap-6 text-2xl items-center relative">
                
                <Link to={'/chat'} className="cursor-pointer">
                    <IoChatbubbleEllipsesOutline className="w-6 h-6 dark:text-white text-black" />
                </Link>

                <button className="cursor-pointer" onClick={handleModeToggle}>
                    {
                        isDarkMode ?
                            <BsSunFill className="w-5 h-5  dark:text-white text-black" />
                            :
                            <BsMoon className="w-5 h-5 text-black dark:text-white" />
                    }
                </button>

                <button onClick={toggleDropdown} className="cursor-pointer">
                    {
                        user?.profileImageURL ?
                            <img src={user.profileImageURL} alt="user" className="w-8 h-8 rounded-full" />
                            : <FaUserCircle className="w-8 h-8 dark:text-white text-black" />
                    }
                </button>

                {dropdownVisibility && (
                    <div className="absolute top-12 right-0 z-20 w-36 rounded-md border border-black bg-white text-black text-sm shadow-lg dark:bg-black dark:border-white dark:text-white">
                        <Link onClick={toggleDropdown} to={`/profile/${user?._id}`} className="block px-4 py-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white rounded-t-md">
                            Edit Profile
                        </Link>
                        <div onClick={handleLogout} className="px-4 py-2 cursor-pointer dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black rounded-b-md">
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

// {}