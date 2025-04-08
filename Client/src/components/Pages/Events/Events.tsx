import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import EventCard from "./EventCard"
import { useState } from "react";
import { Pagination } from "@/components/Utils/Pagination";
import { useAuthorize } from "@/hooks/useAuthorize";

export const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 10;
  useAuthorize();

  const events = [
    {
      title: "Tech Alumni Meetup 2025",
      date: "April 20, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Gujarat University Auditorium",
      description: "An evening to reconnect with alumni, share experiences, and explore collaboration opportunities.",
      tags: ["Networking", "Tech", "In-Person"],
    },
    {
      title: "Tech Alumni Meetup 2025",
      date: "April 20, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Gujarat University Auditorium",
      description: "An evening to reconnect with alumni, share experiences, and explore collaboration opportunities.",
      tags: ["Networking", "Tech", "In-Person"],
    },
    {
      title: "Tech Alumni Meetup 2025",
      date: "April 20, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Gujarat University Auditorium",
      description: "An evening to reconnect with alumni, share experiences, and explore collaboration opportunities.",
      tags: ["Networking", "Tech", "In-Person"],
    },
  ]

  const filteredEvents = events.filter(event => {
    const query = searchQuery.toLowerCase();

    return (
      event.location.toLowerCase().includes(query) ||
      event.tags.some((tag) => tag.toLowerCase().includes(query)) 
    )
  })

  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12 dark:bg-[#151515]">
        <h2 className="text-3xl font-bold dark:text-white text-black">Events</h2>
        <p className="dark:text-gray-300 text-gray-700">Insights, experiences, and advice from our alumni community</p>
      </div>

      <SearchbarTemplate placeholder="Search articles by title, author or description" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

      <div className="md:w-2/3 gap-x-8 gap-y-12 px-4 md:px-10 py-6 space-y-12">
          {
            filteredEvents.map((event, index) => (
              <EventCard key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              tags={event.tags}
              />
            ))
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


