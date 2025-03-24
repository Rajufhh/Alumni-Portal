import { RootState } from "@/store/Store"
import { useSelector } from "react-redux"
import { NavLink } from "react-router"

export const Sidebar = () => {

  const config = useSelector((state: RootState) => state.config);

  const listItems = [
    { path: "/home", label: "Home", icon: "/home-icon.png" },
    { path: "/events", label: "Events", icon: "/event-icon.png" },
    { path: "/jobs", label: "Jobs", icon: "/job-icon.png" },
    { path: "/interview-experiences", label: "Interview Experiences", icon: "/interview-icon.png" },
    { path: "/find-mentor", label: "Find Mentors", icon: "/graduate-icon.png" },
    { path: "/alumni-directory", label: "Alumni Directory", icon: "/list-icon.png" },
    { path: "/gallery", label: "Gallery", icon: "/gallery-icon.png" },

  ]

  if (config.isSidebarVisible === true){
    return (
      <div className="fixed left-0 top-[3.5rem] px-8 bg-[hsl(240,10%,3.9%)] h-[calc(100vh-3.5rem)] ml-[-1px] box-border">
        <ul className="flex flex-col gap-5 p-6 text-sm">
            {
              listItems.map(item => (
                <li>
                  <NavLink 
                      to={item.path}
                      className={({ isActive }) => 
                          `${isActive? 'text-white' : 'text-gray-300'} ${isActive? 'font-semibold' : ''} cursor-pointer hover:text-white`
                      }
                  >
                      <div className="flex gap-3">
                        <img src={item.icon} alt="icon" className="w-5 h-5" />
                        <p>{item.label}</p>
                      </div>
                  </NavLink>
              </li>
              ))
            }
        </ul>
      </div>
    )
  }
}
