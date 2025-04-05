import disconnectIcon from "@/assets/disconnect-icon.svg"
import disconnectIconDark from "@/assets/disconnect-icon-dark.svg"
import userIcon from "@/assets/user-icon.svg"
import userIconDark from "@/assets/user-icon-dark.svg"
import { RootState } from "@/store/Store";
import { useSelector } from "react-redux";

interface userConnectionProps {
    firstName: string;
    lastName: string;
    _id: string;
    profileImageURL: string;
    role: string;
}

export const UserConnectionCard = ({ firstName, lastName, _id, profileImageURL, role }: userConnectionProps) => {
    const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
    if (!isDarkMode){
      console.log(_id);
    }

  return (
    <div className="flex relative gap-4 items-center">

        <img src={ profileImageURL || (isDarkMode ? userIcon : userIconDark) } className="w-8 h-8 rounded-full" />

        <div className="">
            <p className="text-sm">{firstName + ' ' + lastName}</p>
            <p className="text-xs text-gray-400">{role[0].toUpperCase() + role.substring(1)}</p>
        </div>

        <img src={ isDarkMode ? disconnectIconDark : disconnectIcon } className="w-4 h-4 absolute right-2 top-2" />

    </div>
  )
}
