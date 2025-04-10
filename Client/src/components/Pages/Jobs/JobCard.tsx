import { Badge } from "@/components/Utils/Badge";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Job } from "./Jobs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

interface JobCardInterface {
  job: Job;
  setJobToEdit: Dispatch<SetStateAction<string>>;
  setFormVisibility: Dispatch<SetStateAction<boolean>>;
  deleteJob: (_id: string) => void;
}

export const JobCard = ({
  job,
  setJobToEdit,
  setFormVisibility,
  deleteJob,
}: JobCardInterface) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);

  const isOwner = user?._id === job.owner._id;

  const handleUpdateJob = () => {
    setFormVisibility(true);
    setDropdownVisibility(false);
    setJobToEdit(job._id);
  };

  const handleDeleteJob = () => {
    deleteJob(job._id);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`#dropdown-${job.owner._id}`)) {
        setDropdownVisibility(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [job.owner._id]);

  return (
    <div className="bg-white border rounded-xl col-span-2 p-6 shadow-md hover:shadow-lg transition relative dark:bg-[#151515] dark:text-white text-black">
      <div className="flex justify-between items-center relative">
        <h2 className="text-lg font-semibold">{job.title}</h2>

        {["admin", "alumni"].includes(job.owner.role) && (
          <>
            <BsThreeDotsVertical
              className="cursor-pointer"
              onClick={() => setDropdownVisibility((prev) => !prev)}
            />
            {dropdownVisibility && isOwner && (
              <div
                id={`dropdown-${job.owner._id}`}
                className="absolute top-8 right-1 z-20 w-20 rounded-sm border border-black bg-white text-black text-xs shadow-lg dark:bg-black dark:border-white dark:text-white"
              >
                <div
                  className="text-center w-full py-0.5 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white cursor-pointer rounded-t-sm"
                  onClick={handleUpdateJob}
                >
                  Edit
                </div>

                <div
                  className="cursor-pointer py-0.5 text-center dark:hover:bg-white hover:bg-black hover:text-white dark:hover:text-black rounded-b-sm"
                  onClick={handleDeleteJob}
                >
                  Delete
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300 p-2 mb-2 border-b border-gray-300 w-3/4">
        {job.description}
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2 text-gray-600 font-semibold dark:text-gray-300 text-sm">
          <RiMoneyRupeeCircleLine className="w-4 h-4" />
          {job.salary}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span>🏢 {job.company}</span>
          </div>

          <span className="text-gray-400">•</span>

          <div className="flex items-center gap-1">
            <span>📍 {job.location}</span>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <span>
              Posted on {new Date(job.createdAt).toLocaleDateString().toString()}
            </span>
          </div>
          <span className="text-gray-400">•</span>
          <span>{job.jobType}</span>
        </div>

        {job.skills?.length > 0 && (
          <div className="flex flex-wrap gap-2 text-sm">
            {job.skills.map((skill, index) => (
              <Badge key={index} value={skill} />
            ))}
          </div>
        )}
      </div>

      <a
        href={job.url}
        target="_blank"
        className="px-4 py-1.5 bg-black font-semibold cursor-pointer text-white rounded-md transition text-sm absolute bottom-4 right-4 dark:bg-white dark:text-black"
      >
        Apply Now
      </a>
    </div>
  );
};
