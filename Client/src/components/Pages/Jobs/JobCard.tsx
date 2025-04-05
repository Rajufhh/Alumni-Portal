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
      <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
  
        <div className="text-sm text-gray-600 flex flex-wrap items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <span>🏢 {company}</span>
          </div>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-1">
            <span>📍 {location}</span>
          </div>
        </div>
  
        <div className="text-xs text-gray-500 flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span>Posted on {date}</span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{jobType}</span>
        </div>
  
        {skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-sm text-xs text-white bg-black"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <button className="px-4 py-1.5 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition text-sm absolute bottom-4 right-4">
            Apply Now
        </button>
      </div>
    );
  };