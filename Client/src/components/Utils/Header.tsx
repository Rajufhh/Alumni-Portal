import { toggleSidebarVisibility } from "@/store/configSlice";
import { clearUser } from "@/store/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router"

export const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const listItems = [
        { path: "/home", label: "Home" },
        { path: "/events", label: "Events" },
        { path: "/jobs", label: "Jobs" },
        { path: "/interview-experiences", label: "Interview Experiences" },
        { path: "/find-mentor", label: "Find Mentor" },
        { path: "/alumni-directory", label: "Alumni Directory" },
        { path: "/gallery", label: "Gallery" },
    ]

    const toggleSidebar = () => {
        dispatch(toggleSidebarVisibility());
    }

  return (
    <header className="flex items-center justify-between px-6 h-16 bg-[hsl(240,10%,3.9%)] text-sm fixed top-0 left-0 w-screen text-white border-b border-dashed">

        <div className="flex gap-6 items-center">
            <div className="mx-4 text-lg font-semibold flex gap-3 items-center">
                <img src="/sidebar_toggle.png" alt="sidebar-toggle" className="lg:hidden w-5 mx-4 cursor-pointer" onClick={toggleSidebar} />
                <Link to='/home' className="flex gap-3 items-center">
                    <img src="/logo.png" alt="logo" className="w-10" />
                    <h1>Alumni Portal</h1>
                </Link>
            </div>
        </div>

        <ul className="hidden lg:flex gap-6 text-sm">
          {
            listItems.map(item => (
              <li>
                <NavLink 
                    to={item.path}
                    className={({ isActive }) => 
                        `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                    }
                >
                    {item.label}
                </NavLink>
            </li>
            ))
          }
      </ul>

        <div className="flex gap-6">
            <Link to='/profile' className="hover:text-white text-gray-300">Profile</Link>
            <div className="hover:text-red-500 text-gray-300 cursor-pointer" onClick={handleLogout}>Logout</div>
            <div></div>
        </div>
    </header>
  )
}
