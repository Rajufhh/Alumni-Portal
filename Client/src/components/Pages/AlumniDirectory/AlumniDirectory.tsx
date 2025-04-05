import { AlumniCard } from "./AlumniCard"

export const AlumniDirectory = () => {

  

  return (
    <div className="p-48">
      <AlumniCard 
        name="Sarah Johnson"
        jobTitle="Senior Software Engineer"
        company="TechCorp Inc."
        location="San Francisco, CA"
        batch="2015"
        bio="Experienced software engineer with a passion for building scalable web applications and mentoring junior developers."
        skills={["JavaScript", "React", "Node.js", "AWS"]}
      />
    </div>
  )
}
