"use client";

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm"; // Make sure you export default SignUp from SignUp.tsx

export const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] relative px-4">

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 text-lg font-semibold z-10">

        <button
          className={`transition-colors duration-200 cursor-pointer ${
            isLoginForm ? "text-white" : "text-gray-500 hover:text-white"
          }`}
          onClick={() => setIsLoginForm(true)}
        >
          Login
        </button>

        <button
          className={`transition-colors duration-200 cursor-pointer ${
            isLoginForm ? "text-gray-500 hover:text-gray-500" : "text-white"
          }`}
          onClick={() => setIsLoginForm(false)}
        >
          Signup
        </button>

      </div>

      <div className="w-full flex justify-center">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>

    </div>
  );
};




