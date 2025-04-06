import { Badge } from "@/components/Utils/Badge";

interface AlumniCardInterface {
    name: string;
    jobTitle: string;
    company: string;
    location: string;
    batch: string;
    bio: string;
    skills: string[];
}
export const AlumniCard = ({
  name,
  jobTitle,
  company,
  location,
  batch,
  skills,
  bio
}: AlumniCardInterface) => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition relative dark:bg-[#151515]">
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{jobTitle} at {company}</p>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
            <span>📍 {location}</span>
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
              {batch} Batch
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-400 m-2">{bio}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {skills.map((skill, index) => (
              <Badge key={index} value={skill}/>
            ))}
          </div>

          <button className="px-4 py-1.5 bg-black font-semibold cursor-pointer text-white rounded-md transition text-sm absolute bottom-6 right-4 dark:bg-white dark:text-black">
            Apply Now
        </button>
        </div>
      </div>
    </div>
  );
};