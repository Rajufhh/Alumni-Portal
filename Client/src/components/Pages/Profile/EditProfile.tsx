import { RootState } from "@/store/Store";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: string;
    location?: string;
    graduationYear?: string;
    role?: string;
    linkedin?: string;
    github?: string;
    skills?: string[];
}

export const EditProfile = () => {
    const { user } = useSelector((state: RootState) => state.user);

    const defaultData: FormData = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        dob: user?.dob,
        location: user?.location,
        graduationYear: "2027",
        role: user?.role,
        linkedin: user?.linkedin,
        github: user?.github,
        skills: user?.skills,
      };
    
    const [formData, setFormData] = useState<FormData>(defaultData);

    const isModified = Object.keys(formData).some(
        (key) => formData[key as keyof FormData] !== defaultData[key as keyof FormData]
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
      console.log("Saved data:", formData);
      alert("Changes saved!");
      Object.assign(defaultData, formData);
    };

  return (
    <>
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-8">Edit Profile</h2>
        
        <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>

          {Object.entries(formData).map(([key, value]) => (
            
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type={
                  key === "dob"
                    ? "date"
                    : key === "email"
                    ? "email"
                    : key === "linkedin" || key === "github"
                    ? "url"
                    : "text"
                }
                name={key}
                value={value}
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
          ))}

          <div className="w-full flex justify-center mt-6 col-span-2">
            <button
              type="submit"
              disabled={!isModified}
              className={`px-6 py-2 w-full rounded-md font-semibold transition duration-200 cursor-pointer 
              ${
                isModified
                  ? "bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
                  : "text-gray-400 bg-black dark:bg-white dark:text-gray-700 cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
          </div>

        </form>
    </>
  )
}
