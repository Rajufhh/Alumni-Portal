import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router"

export const Header = () => {

    // const dispatch = useDispatch();

    const handleLogout = () => {

    };

    useEffect(() => {

    }, []);

  return (
    <header className="flex items-center justify-between px-8 h-14 bg-[hsl(240,10%,3.9%)] text-sm border-b border-dashed border-gray-400 fixed top-0 left-0 w-screen text-white">

        <div className="flex gap-6 items-center">
            <div className="m-8 text-lg font-semibold flex gap-3 items-center">
                <Link to='/home' className="flex gap-3 items-center">
                    <img src="/logo.png" alt="logo" className="w-10" />
                    <div>Alumni Portal</div>
                </Link>
            </div>

            <ul className="flex gap-6">
                <li>
                    <NavLink 
                        to='/home'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Home
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/events'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Events
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/jobs'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Jobs
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/interview-experiences'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Interview Experiences
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/find-mentor'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Find Mentors
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/alumni-directory'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Alumni Directory
                </NavLink>
                </li>
                <li>
                    <NavLink 
                        to='/gallery'
                        className={({ isActive }) => 
                            `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                        }
                >
                    Gallery
                </NavLink>
                </li>
            </ul>
        </div>

        <div className="flex gap-6">
            <Link to='/profile' className="font-semibold">View Profile</Link>
            <div className="text-red-500 cursor-pointer" onClick={handleLogout}>Logout</div>
            <div></div>
        </div>
    </header>
  )
}
