"use client"

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

export const Login = () => {

  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="bg-[hsl(240,10%,3.9%)] text-white min-h-screen flex items-center justify-between relative gap-8">

        {/* Typography */}
        <div className="text-4xl lg:text-7xl md:text-6xl font-semibold space-y-3 ml-20">
            <div>Connect.</div>
            <div>Explore.</div>
            <div>Grow.</div>
        </div>

        {/* Login - Signup toggle */}
        <div className="space-x-6 absolute top-8 left-[42vw] md:left-[46vw] flex font-semibold">
          <button className={`cursor-pointer hover:text-white ${isLoginForm? 'text-gray-400' : 'text-white'}`} onClick={() => setIsLoginForm(!isLoginForm)}>Signup</button>
          <button className={`cursor-pointer hover:text-white ${isLoginForm? 'text-white' : 'text-gray-400'}`} onClick={() => setIsLoginForm(!isLoginForm)}>Login</button>
        </div>

        {/* Form */}
        <div className="flex mr-42 mt-16 mb-8">
          {
            isLoginForm? <LoginForm /> : <SignupForm />
          }
        </div>
    </div>
  )
}
