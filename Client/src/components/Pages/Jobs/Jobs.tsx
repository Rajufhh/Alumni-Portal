import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import { JobCard } from "./JobCard"
import { Pagination } from "@/components/Utils/Pagination"
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/store/Store";

export const Jobs = () => {
  // const isDarkMode = useSelector((state: RootState) => state.config.isDarkMode);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const jobs = [
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
    { 
      title: "Frontend Developer",
      company: "InnovateTech",
      location: "Bangalore, India",
      date: "April 3, 2025",
      jobType: "Full-Time",
      skills: ["React", "Tailwind", "REST API"]
    },
  ]

  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12 dark:bg-[#151515]">
        <h2 className="text-3xl font-bold dark:text-white text-black">Job Board</h2>
        <p className="dark:text-gray-300 text-gray-700">Find and apply to jobs posted by alumni</p>
      </div>

      <SearchbarTemplate placeholder="Search jobs by title, description or company"/>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 px-4 md:px-10 py-6">
          {
            jobs.map((job, index) => (
              <JobCard key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                date={job.date}
                jobType={job.jobType}
                skills={job.skills}
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
