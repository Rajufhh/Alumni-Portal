import { useNotification } from "@/hooks/useNotification";
import { RootState } from "@/store/Store";
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { Spinner } from "@/components/ui/Spinner";
import { Job } from "./Jobs";
import { Badge } from "@/components/Utils/Badge";

interface JobFormProps {
  setJobs: Dispatch<SetStateAction<Job[]>>;
  setFormVisibility: Dispatch<SetStateAction<boolean>>;
  jobId?: string | null;
}

export const JobForm = ({ setJobs, setFormVisibility, jobId }: JobFormProps) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");
  const [salary, setSalary] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { notify } = useNotification();
  const { user } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId) return;
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/api/job/${jobId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const data = res.data?.data;
        if (data) {
          setTitle(data.title);
          setCompany(data.company);
          setLocation(data.location);
          setJobType(data.jobType);
          setSkills(data.skills || []);
          setSalary(data.salary);
          setUrl(data.url);
          setDescription(data.description);
        }
      } catch (error) {
        console.error("Error fetching job", error);
        notify({
          id: "job error",
          type: "error",
          content: "Failed to fetch job",
        });
      } 
      finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  const handleAddSkill = () => {
    const trimmed = newSkill.trim();
    if (!trimmed) return;
    setSkills((prev) => [...prev, trimmed]);
    setNewSkill("");
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const payload = {
        title,
        company,
        location,
        jobType,
        skills,
        salary,
        url,
        description,
        owner: user?._id,
      };

      if (jobId) {
        const res = await axios.put(`http://localhost:3000/api/job/${jobId}`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        notify({
          id: "job-toast",
          type: "success",
          content: "Job updated successfully",
        });

        setJobs((prev) =>
          prev.map((job) => (job._id === jobId ? res.data.data : job))
        );

      } 
      else {
        const res = await axios.post("http://localhost:3000/api/job", payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        notify({
          id: "job-toast",
          type: "success",
          content: "Job posted successfully",
        });

        setJobs((prev) => [...prev, res.data?.data]);
      }
    } catch (error) {
      console.error("Error posting job", error);
      notify({
        id: "job-toast",
        type: "error",
        content: "Could not post job",
      });

      setFormVisibility(false);
    } finally {
      setLoading(false);
      setFormVisibility(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-1/2 mx-auto m-6 p-6 rounded-md dark:bg-[#222] bg-white shadow-lg text-white space-y-4">
        <div className="flex items-center gap-4">
          <IoArrowBackOutline
            className="w-8 h-8 cursor-pointer dark:text-white text-black"
            onClick={() => setFormVisibility((prev) => !prev)}
          />
          <h2 className="text-3xl font-semibold dark:text-white text-black">
            {jobId ? "Edit Job" : "Post Job"}
          </h2>
        </div>

        <form className="space-y-6">

            <div className="flex flex-wrap gap-4">
                {[
                { label: "Title", value: title, setter: setTitle },
                { label: "Company", value: company, setter: setCompany },
                { label: "Location", value: location, setter: setLocation },
                { label: "Salary", value: salary, setter: setSalary },
                { label: "URL", value: url, setter: setUrl },
                ].map(({ label, value, setter }) => (
                <div key={label} className="flex-1 min-w-[48%]">
                    <label className="block text-lg font-semibold dark:text-white text-black">
                    {label}
                    </label>
                    <input
                    type="text"
                    className="rounded-sm w-4/5 px-2 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    />
                </div>
                ))}
                <div className="flex-1 min-w-[48%]">
                    <label className="block text-lg font-semibold dark:text-white text-black">
                    Job Type
                    </label>
                    <select
                    className="rounded-sm w-4/5 px-2 py-1.5 text-sm bg-black dark:bg-white text-white dark:text-black focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Half-time">Half-time</option>
                    </select>
                </div>
            </div>

            {/* Skills */}
            <div>
                <label className="block text-lg font-semibold dark:text-white text-black">
                Skills
                </label>
                <div className="flex gap-4 mb-2">
                <input
                    type="text"
                    className="rounded-sm w-1/2 px-2 py-2 text-sm bg-black dark:bg-white text-white dark:text-black focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-black"
                    placeholder="Add skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                />
                <button
                    className="text-sm dark:text-black cursor-pointer text-white dark:bg-white bg-black px-3 py-1 rounded-sm font-semibold"
                    onClick={(e) => {
                    e.preventDefault();
                    handleAddSkill();
                    }}
                >
                    Add
                </button>
                </div>
                <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <Badge key={skill} value={skill} />
                ))}
                </div>
            </div>

            {/* Description */}
            <div>
                <label className="block text-lg font-semibold dark:text-white text-black">
                Description
                </label>
                <textarea
                rows={6}
                className="rounded-sm w-full p-4 text-sm bg-black dark:bg-white text-white dark:text-black focus:outline-none focus:ring-2 resize-none dark:focus:ring-white focus:ring-black"
                placeholder="Job description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            {/* Submit */}
            <div>
                {loading ? (
                <Spinner />
                ) : (
                <button
                    className="dark:text-black cursor-pointer text-white dark:bg-white bg-black px-3 py-2 rounded-sm font-semibold w-full"
                    onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                    }}
                >
                    {jobId ? "Update" : "Post"}
                </button>
                )}
            </div>
            </form>
      </div>
    </div>
  );
};
