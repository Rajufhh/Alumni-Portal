import React, { useState } from "react";
import Rose from "../assets/rose.jpg";
import "./EditProfile.css";

function EditProfile() {
  const defaultData = {
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

  const [formData, setFormData] = useState(defaultData);
  const [profilePic, setProfilePic] = useState(Rose);

  // Check if any field is changed
  const isModified = Object.keys(formData).some(
    (key) => formData[key] !== defaultData[key]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved data:", formData);
    alert("Changes saved!");
    // Add backend API call here later

    // Update default values after saving
    Object.keys(formData).forEach((key) => {
      defaultData[key] = formData[key];
    });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile-wrapper">
      <div className="sidebar">
        <img src={profilePic} className="profile-photo" alt="Profile" />
        <label htmlFor="profile-pic-upload" className="upload-label"></label>
        <input
          type="file"
          id="profile-pic-upload"
          accept="image/*"
          onChange={handleProfilePicChange}
        />
        <div className="profile-options">
          <button className="profile-option active-option">Edit Profile</button>
          <button className="profile-option">Change Password</button>
          <button className="profile-option">Logout</button>
        </div>
      </div>

      <div className="edit-profile-main">
        <div className="form-wrapper">
          <h2>Edit Profile</h2>
          <form className="edit-profile-form" onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <div className="form-group" key={key}>
                <label>
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
                  value={formData[key]}
                  onChange={handleChange}
                  className={
                    formData[key] === defaultData[key]
                      ? "light-text"
                      : "dark-text"
                  }
                />
              </div>
            ))}

            <button type="submit" className="save-btn" disabled={!isModified}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;