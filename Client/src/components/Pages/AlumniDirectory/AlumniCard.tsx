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
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition relative">
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-200 animate-pulse" />

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">{jobTitle} at {company}</p>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mt-1">
            <span>📍 {location}</span>
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
              {batch} Batch
            </span>
          </div>

          <p className="text-gray-700 mt-2">{bio}</p>

          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="font-semibold">Skills:</span>
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-0.5   border border-black font-semibold rounded-full text-xs "
              >
                {skill}
              </span>
            ))}
          </div>

            <button className="px-4 py-1.5 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition text-sm absolute top-6 right-8">
                Connect
            </button>
        </div>
      </div>
    </div>
  );
};