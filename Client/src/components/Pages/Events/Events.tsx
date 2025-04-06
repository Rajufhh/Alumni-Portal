// import EventCard from "./EventCard"

// export const Events = () => {
//   return (
//     <div className="">
//       <EventCard
//       title="Tech Alumni Meetup 2025"
//       date="April 20, 2025"
//       time="5:00 PM - 8:00 PM"
//       location="Gujarat University Auditorium"
//       description="An evening to reconnect with alumni, share experiences, and explore collaboration opportunities."
//       tags={["Networking", "Tech", "In-Person"]}
//       />
//     </div>
//   )
// }

import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import EventCard from "./EventCard"
import { useState } from "react";
import { Pagination } from "@/components/Utils/Pagination";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/Store";

export const Events = () => {
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);`
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12">
        <h2 className="text-3xl font-bold dark:text-white text-black">Events</h2>
        <p className="dark:text-gray-300 text-gray-700">Insights, experiences, and advice from our alumni community</p>
      </div>

      <SearchbarTemplate placeholder="Search articles by title, author or description"/>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 px-4 md:px-10 py-6">
          {
            <EventCard
              title="Tech Alumni Meetup 2025"
              date="April 20, 2025"
              time="5:00 PM - 8:00 PM"
              location="Gujarat University Auditorium"
              description="An evening to reconnect with alumni, share experiences, and explore collaboration opportunities."
              tags={["Networking", "Tech", "In-Person"]}
              />
          }
      </div>
      
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />

    </div>
  )
}


