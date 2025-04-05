"use client";

import { setUser } from "@/store/userSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    batch: "",
    role: "",
    linkedin: "",
    github: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        formData,
        { withCredentials: true }
      );
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;
      const user = response.data.data.user;

      dispatch(setUser(user));

      if (!accessToken || !refreshToken) {
        throw new Error("Error while signing up");
      }

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      navigate("/home");
    } catch (error) {
      console.error("SIGNUP_ERROR", error);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Create Your Account
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="text"
          name="batch"
          placeholder="Batch"
          value={formData.batch}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white text-gray-600"
        >
          <option value="" disabled hidden>Select Role</option>
          <option value="Student">Student</option>
          <option value="Alumni">Alumni</option>
        </select>
        <input
          id="dob"
          type="text"
          name="dob" 
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Profile"
          value={formData.github}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:col-span-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 max-h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:col-span-2"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-200"
        onClick={submitForm}
      >
        Sign Up →
      </button>
    </div>
  );
};
