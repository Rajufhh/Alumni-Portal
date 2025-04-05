import { JobCard } from "./JobCard"

export const Jobs = () => {
  return (
    <div className="w-1/2">
      <JobCard
        title="Frontend Developer"
        company="InnovateTech"
        location="Bangalore, India"
        date="April 3, 2025"
        jobType="Full-Time"
        skills={["React", "Tailwind", "REST API"]}
      />
    </div>
  )
}
