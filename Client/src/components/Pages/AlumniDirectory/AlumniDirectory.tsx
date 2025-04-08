import { SearchbarTemplate } from "@/components/Utils/SearchbarTemplate"
import { Pagination } from "@/components/Utils/Pagination"
import { useState } from "react";
import { AlumniCard } from "./AlumniCard";
import { useAuthorize } from "@/hooks/useAuthorize";

export const AlumniDirectory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const totalPages = 10;
  useAuthorize();

  const alumniProfiles = [
    {
      name: "Sarah Johnson",
      jobTitle: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      batch: "2015",
      bio: "Experienced software engineer with a passion for building scalable web applications and mentoring junior developers.",
      skills: ["JavaScript", "React", "Node.js", "AWS"]
    },
    {
      name: "Rahul Mehta",
      jobTitle: "Product Manager",
      company: "Google",
      location: "Bangalore, India",
      batch: "2013",
      bio: "Leads cross-functional teams to deliver high-impact product features. Passionate about user experience and growth strategies.",
      skills: ["Product Strategy", "Agile", "UX", "Analytics"]
    },
    {
      name: "Emily Chen",
      jobTitle: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      batch: "2016",
      bio: "Data-driven professional specializing in machine learning models, recommendation systems, and A/B testing.",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"]
    },
    {
      name: "Aditya Singh",
      jobTitle: "DevOps Engineer",
      company: "Amazon Web Services",
      location: "Hyderabad, India",
      batch: "2014",
      bio: "Focused on automation, CI/CD pipelines, and cloud infrastructure with strong AWS and Kubernetes knowledge.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      name: "Natalie Brooks",
      jobTitle: "UX Designer",
      company: "Airbnb",
      location: "New York, NY",
      batch: "2012",
      bio: "User-focused designer passionate about crafting delightful and accessible user experiences.",
      skills: ["Figma", "Wireframing", "Prototyping", "Accessibility"]
    }
  ];

  const filteredAlumni = alumniProfiles.filter(alumni => {
    const query = searchQuery.toLowerCase();
    
    return (
      alumni.batch.toLowerCase().includes(query) ||
      alumni.jobTitle.toLowerCase().includes(query) ||
      alumni.company.toLowerCase().includes(query) ||
      alumni.skills.some((skill) => skill.toLowerCase().includes(query)) ||
      alumni.name.toLowerCase().includes(query)
    )
  });

  return (
    <div className="dark:bg-[#000000] bg-[#e6e9da] w-full min-h-screen flex flex-col items-center pb-6">

      <div className="space-y-2 py-6 w-full bg-gray-50 px-12 dark:bg-[#151515]">
        <h2 className="text-3xl font-bold dark:text-white text-black">Alumni Directory</h2>
        <p className="dark:text-gray-300 text-gray-700">Find and connect with Alumni</p>
      </div>

      <SearchbarTemplate placeholder="Search by name, skills or company" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

      <div className="w-full px-4 md:px-30 py-6 space-y-8">
          {
            filteredAlumni.map((alumni, index) => (
              <AlumniCard key={index}
                name={alumni.name}
                jobTitle={alumni.jobTitle}
                company={alumni.company}
                location={alumni.location}
                batch={alumni.batch}
                bio={alumni.bio}
                skills={alumni.skills}
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
