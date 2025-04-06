import { Badge } from "@/components/Utils/Badge";

interface JobCardInterface {
    title: string;
    company: string;
    location: string;
    jobType: string;
    skills: string[];
    date: string;
  }
  
  export const JobCard = ({ title, company, date, location, jobType, skills }: JobCardInterface) => {
    

    return (
      <div className="bg-white border rounded-xl col-span-2 p-6 shadow-md hover:shadow-lg transition relative dark:bg-[#151515] dark:text-white text-black">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
  
        <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <span>🏢 {company}</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-1">
            <span>📍 {location}</span>
          </div>
        </div>
  
        <div className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span>Posted on {date}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{jobType}</span>
        </div>
  
        {skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm">
            {skills.map((skill, index) => (
              <Badge key={index} value={skill}/>
            ))}
          </div>
        )}

        <button className="px-4 py-1.5 bg-black font-semibold cursor-pointer text-white rounded-md transition text-sm absolute bottom-4 right-4 dark:bg-white dark:text-black">
            Apply Now
        </button>
      </div>
    );
  };