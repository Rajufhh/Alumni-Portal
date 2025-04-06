// import { RootState } from "@/store/Store";
// import { useSelector } from "react-redux";

interface searchbarProps {
    placeholder: string;
}

export const SearchbarTemplate = ({ placeholder }: searchbarProps) => {
    // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);

  return (
    <div className="w-full py-2 bg-gray-50 flex items-center px-12 justify-between dark:bg-[#151515]">
        <div className="w-1/2 py-4 space-x-4">
            <input type="text" placeholder={placeholder} className="w-[70%] py-2 px-3 focus:ring-black focus:ring-2 focus:outline-none text-sm rounded-sm bg-white text-black shadow-sm shadow-black"/>
            <button className="dark:bg-white dark:text-black text-sm bg-black text-white font-semibold px-4 py-2 rounded-sm cursor-pointer">
                Search
            </button>
        </div>

        <div className="flex text-sm gap-3 items-center">
            <label htmlFor="sort" className="font-semibold text-md text-gray-700 dark:text-gray-300">Sort by:</label>
            <select name="sort" className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 ease-in-out text-black">
                <optgroup className="">
                    <option value="latest" selected className="">Latest</option>
                    <option value="oldest" className="">Oldest</option>
                    <option value="popularity" className="">Popularity</option>
                </optgroup>
            </select>
        </div>


    </div>
  )
}
