import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import { JobCard } from "./JobCard"
import { Pagination } from "@/components/Utils/Pagination"
import { useState } from "react";
import { useAuthorize } from "@/hooks/useAuthorize";

export const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [searchQuery, setSearchQuery] = useState("");
  useAuthorize();

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
      title: "Backend Developer",
      company: "TechVerse",
      location: "Hyderabad, India",
      date: "April 1, 2025",
      jobType: "Part-Time",
      skills: ["Node.js", "Express", "MongoDB"]
    },
    { 
      title: "UI/UX Designer",
      company: "Designify",
      location: "Pune, India",
      date: "March 28, 2025",
      jobType: "Full-Time",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    { 
      title: "Data Scientist",
      company: "DataGenius",
      location: "Remote",
      date: "March 30, 2025",
      jobType: "Remote",
      skills: ["Python", "Pandas", "Machine Learning"]
    },
    { 
      title: "Mobile App Developer",
      company: "AppSphere",
      location: "Chennai, India",
      date: "April 2, 2025",
      jobType: "Full-Time",
      skills: ["React Native", "Firebase", "TypeScript"]
    },
    { 
      title: "DevOps Engineer",
      company: "CloudOps",
      location: "Delhi, India",
      date: "April 5, 2025",
      jobType: "Full-Time",
      skills: ["Docker", "Kubernetes", "AWS"]
    },
    { 
      title: "Software Intern",
      company: "NextGen Labs",
      location: "Mumbai, India",
      date: "April 4, 2025",
      jobType: "Internship",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    { 
      title: "Full Stack Developer",
      company: "CodeCraft",
      location: "Remote",
      date: "March 27, 2025",
      jobType: "Contract",
      skills: ["React", "Node.js", "GraphQL"]
    }
  ];
  

  const filteredJobs = jobs.filter(job => {
    const query = searchQuery.toLowerCase();
    
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.skills.some((skill) => skill.toLowerCase().includes(query))
    )
  })

  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12 dark:bg-[#151515]">
        <h2 className="text-3xl font-bold dark:text-white text-black">Job Board</h2>
        <p className="dark:text-gray-300 text-gray-700">Find and apply to jobs posted by alumni</p>
      </div>

      <SearchbarTemplate placeholder="Search jobs by title, description or company" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 px-4 md:px-10 py-6">
      {
          filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobCard key={index}
                title={job.title}
                company={job.company}
                location={job.location}
                date={job.date}
                jobType={job.jobType}
                skills={job.skills}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-300">No jobs found for "{searchQuery}"</div>
          )
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
