import { useState, ChangeEvent, FormEvent } from "react";
import Rose from "@/assets/rose.jpg";

interface FormData {
  username: string;
  fullName: string;
  email: string;
  dob: string;
  phone: string;
  location: string;
  graduationYear: string;
  institute: string;
  role: string;
  linkedin: string;
  github: string;
  skills: string;
}

export const EditProfile = () => {
  const defaultData: FormData = {
    username: "shinchan_habib",
    fullName: "ShinChan Habib",
    email: "Shinchan@example.com",
    dob: "2005-06-01",
    phone: "123-456-7890",
    location: "Pune, Japan",
    graduationYear: "2025",
    institute: "XYZ University",
    role: "Software Engineer",
    linkedin: "https://linkedin.com/in/pranali",
    github: "https://github.com/pranali",
    skills: "React, CSS, JS, Comedy",
  };

  const [formData, setFormData] = useState<FormData>(defaultData);
  const [profilePic, setProfilePic] = useState<string>(Rose);

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

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#f5f3ea] dark:bg-[#000000] transition-colors">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 flex flex-col items-center py-10 border-r border-gray-300 dark:border-neutral-800">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-gray-200 dark:border-neutral-700"
        />
        <label
          htmlFor="profile-pic-upload"
          className="text-sm text-neutral-700 dark:text-neutral-300 mt-3 cursor-pointer hover:underline"
        >
          Change Profile Picture
        </label>
        <input
          type="file"
          id="profile-pic-upload"
          accept="image/*"
          className="hidden"
          onChange={handleProfilePicChange}
        />

        <div className="mt-8 space-y-3 w-full px-10">
          <button className="w-full py-2 text-sm border rounded transition bg-[#151515] hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:text-neutral-100">
            Edit Profile
          </button>
          <button className="w-full py-2 text-sm border rounded transition bg-[#151515] hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:text-neutral-100">
            Change Password
          </button>
          <button className="w-full py-2 text-sm border rounded text-red-500 hover:bg-red-100 dark:hover:bg-red-900">
            Logout
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-2/3 p-8 flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-8">Edit Profile</h2>
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
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};