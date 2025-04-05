"use client";

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm"; // Make sure you export default SignUp from SignUp.tsx

export const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    // Container that centers the form
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative px-4">

      {/* Toggle Buttons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 text-lg font-semibold z-10">
        <button
          className={`transition-colors duration-200 cursor-pointer ${
            isLoginForm ? "text-black" : "text-gray-500 hover:text-black"
          }`}
          onClick={() => setIsLoginForm(true)}
        >
          Login
        </button>
        <button
          className={`transition-colors duration-200 cursor-pointer ${
            isLoginForm ? "text-gray-500 hover:text-black" : "text-black"
          }`}
          onClick={() => setIsLoginForm(false)}
        >
          Signup
        </button>
      </div>

      {/* Right: Form Section */}
      <div className="w-full max-w-3xl mt-16 bg-white text-black rounded-xl shadow-lg p-8">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};




