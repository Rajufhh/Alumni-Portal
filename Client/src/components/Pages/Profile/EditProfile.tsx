import { Spinner } from "@/components/ui/Spinner";
import { Badge } from "@/components/Utils/Badge";
import { useNotification } from "@/hooks/useNotification";
import { RootState } from "@/store/Store";
import { updateUser } from "@/store/userSlice";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  location?: string;
  batch?: string;
  role?: string;
  linkedin?: string;
  github?: string;
  skills: string[];
}

export const EditProfile = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const { notify } = useNotification();
  const [loading, setLoading] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  const dispatch = useDispatch();

  const defaultData: FormData = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    dob: user?.dob
      ? new Date(user.dob).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "",
    location: user?.location,
    batch: user?.batch.substring(0,4),
    linkedin: user?.linkedin,
    github: user?.github,
    skills: user?.skills || [],
  };

  const [formData, setFormData] = useState<FormData>(defaultData);

  const isModified = Object.keys(formData).some(
    (key) =>
      formData[key as keyof FormData]?.toString() !==
      defaultData[key as keyof FormData]?.toString()
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleUpdateProfile();
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      const result = await axios.put(`http://localhost:3000/api/user/profile`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const updatedUser = result.data?.data;

      if (updatedUser){
        dispatch(updateUser(updatedUser));
        notify({id: "profile-toast",type: "success",content: "Profile updated successfully!"});
      }

    } 
    catch (error) {
      console.error("Error updating profile", error);
      notify({id: "profile-toast",type: "error",content: "Could not update profile"});
    } 
    finally {
      setLoading(false);
    }
  };

  const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (skill && !formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
      setNewSkill("");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-8">
        Edit Profile
      </h2>

      <form
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {Object.entries(formData).map(([key, value]) =>
          key !== "skills" ? (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())
                  .replace("Dob", "Date of Birth")}
              </label>

              <input
                type={
                  key === "email"
                    ? "email"
                    : key === "linkedin" || key === "github"
                    ? "url"
                    : "text"
                }
                name={key}
                value={value as string}
                onChange={handleChange}
                className={`px-4 py-2 rounded-md border text-sm outline-none transition 
                bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 
                ${
                  value === defaultData[key as keyof FormData]
                    ? "text-gray-500 dark:text-neutral-400"
                    : "text-black dark:text-white font-medium"
                } 
                focus:ring-2 focus:ring-black dark:focus:ring-white`}
              />
            </div>
          ) : null
        )}

         {/*Skills  */}
        <div className="flex flex-col col-span-1">
          <label className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-1">
            Skills
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="flex-1 px-4 py-2 rounded-md border text-sm bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="px-4 py-2 rounded-md text-sm font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {
              formData.skills.map((skill) => (
                <Badge key={skill} value={skill} />
              ))
            }
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 col-span-2">
          <button
            type="submit"
            disabled={!isModified || loading}
            className={`px-6 py-2 w-full rounded-md font-semibold transition duration-200 
            ${
              isModified && !loading
                ? "bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                : "text-gray-400 bg-black dark:bg-white dark:text-gray-700 cursor-not-allowed"
            } ${loading ? "opacity-60 cursor-wait" : ""}`}
            onClick={handleUpdateProfile}
          >
            {loading ? <Spinner /> : "Save Changes"}
          </button>
        </div>
      </form>
    </>
  );
};
