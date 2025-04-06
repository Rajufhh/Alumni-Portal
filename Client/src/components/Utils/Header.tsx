import logo from "../../assets/logo.png"
import { Link, NavLink, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { clearUser } from "@/store/userSlice"
import modeIconLight from "../../assets/mode-icon-light.svg"
import modeIconDark from "../../assets/mode-icon-dark.svg"
import { RootState } from "@/store/Store"
import chatIcon from "../../assets/chat-icon.svg"
import userIcon from "../../assets/user-icon.svg"
import { useEffect, useState } from "react"
import { toggleMode } from "@/store/configSlice"
import chatIconDark from "../../assets/chat-icon-dark.svg"
import userIconDark from "../../assets/user-icon-dark.svg"

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
    const [dropdownVisibility, setDropdownVisibility] = useState(false);
    const { user } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (isDarkMode){
            document.documentElement.classList.add('dark');
        }  
        else{
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
    ]

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

            console.log(response);
            if (response.status === 200){
                // Clear user from store
                dispatch(clearUser());

                // Clear tokens from localStorage
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

                // Navigate to the login/signup page
                navigate("/");
            }
            else{
                console.log("Failed to log out");
            }
        }
        catch(error) {
            console.error("Error while logging out", error)
        }
    };

    const handleModeToggle = () => {
        dispatch(toggleMode());
    }

    const handleToggleDropdownVisibility = () => {
        setDropdownVisibility(prev => !prev);
    };

  return (
    <nav className="sticky flex flex-wrap items-center justify-between w-full px-6 py-4 dark:bg-black/70 bg-white/40 text-black backdrop-blur-md shadow-md top-0 z-99">
        <div className="flex gap-3 items-center">
            <img src={logo} className="w-12 h-12"/>
            <h1 className="text-2xl font-bold  text-black dark:text-white font-mono">Alumni Connect</h1>
            {/* <img src={mainLogo} className="" /> */}
        </div>
        <ul className="lg:flex gap-6 text-sm">
           {
            navItems.map(item => (
              <li>
                <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                        `${isActive? 'dark:text-white text-black font-semibold' : 'dark:text-gray-400 text-gray-600'} cursor-pointer dark:hover:text-white hover:text-black transition`
                    }
                >
                    {item.label}
                </NavLink>
            </li>
            ))
          }
      </ul>
        <div className="flex gap-6 text-2xl items-center">
          <Link to={'/chat'} className="cursor-pointer">
            <img src={isDarkMode ? chatIcon : chatIconDark} className="w-5 h-5"/>
          </Link>
          <button className="cursor-pointer" onClick={handleModeToggle}>
            <img className="w-5 h-5" src={isDarkMode ? modeIconLight : modeIconDark}/>
          </button>
          <button className="cursor-pointer relative" onClick={handleToggleDropdownVisibility}>
            <img src={isDarkMode ? userIcon : userIconDark} className="w-8 h-8"/>
            <div
                className={`absolute top-10 right-2 z-20 w-36 rounded-md border border-black bg-white text-black text-sm shadow-lg dark:bg-black dark:border-white dark:text-white ${dropdownVisibility ? 'block' : 'hidden'}`}
            >

                <div className="px-4 py-2 w-full dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white  cursor-pointer rounded-t-md">
                    <Link to={`/profile/${user?._id}`}>
                        Edit Profile
                    </Link>
                </div>

                <div onClick={handleLogout} className="px-4 py-2 cursor-pointer dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black  rounded-b-md">
                    Logout
                </div>

            </div>
          </button>
        </div>
    </nav>
  )
}

