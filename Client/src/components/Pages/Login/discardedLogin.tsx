// "use client"

// import { useState } from "react";
// import { LoginForm } from "./LoginForm";
// import { SignupForm } from "./SignupForm";

// export const Login = () => {

//   const [isLoginForm, setIsLoginForm] = useState(true);

//   return (
//     <div className="bg-[hsl(240,10%,3.9%)] text-white min-h-screen flex items-center justify-between relative gap-8">

//         {/* Typography */}
//         <div className="text-4xl lg:text-7xl md:text-6xl font-semibold space-y-3 ml-20">
//             <div>Connect.</div>
//             <div>Explore.</div>
//             <div>Grow.</div>
//         </div>

//         {/* Login - Signup toggle */}
//         <div className="space-x-6 absolute top-8 left-[42vw] md:left-[46vw] flex font-semibold">
//           <button className={`cursor-pointer hover:text-white ${isLoginForm? 'text-gray-400' : 'text-white'}`} onClick={() => setIsLoginForm(!isLoginForm)}>Signup</button>
//           <button className={`cursor-pointer hover:text-white ${isLoginForm? 'text-white' : 'text-gray-400'}`} onClick={() => setIsLoginForm(!isLoginForm)}>Login</button>
//         </div>

//         {/* Form */}
//         <div className="flex mr-42 mt-16 mb-8">
//           {
//             isLoginForm? <LoginForm /> : <SignupForm />
//           }
//         </div>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm"; // Make sure you export default SignUp from SignUp.tsx

export const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="">

      {/* Left: Motivational Text */}
      {/* <div className="text-center md:text-left space-y-3 text-4xl md:text-6xl font-bold tracking-tight">
        <div>Connect.</div>
        <div>Explore.</div>
        <div>Grow.</div>
      </div> */}

      {/* Toggle Buttons */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-6 text-lg font-semibold z-10">
        <button
          className={`transition-colors duration-200 ${
            isLoginForm ? "text-white" : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setIsLoginForm(true)}
        >
          Login
        </button>
        <button
          className={`transition-colors duration-200 ${
            isLoginForm ? "text-gray-400 hover:text-white" : "text-white"
          }`}
          onClick={() => setIsLoginForm(false)}
        >
          Signup
        </button>
      </div>

      {/* Right: Form Section */}
      <div className="w-full md:w-[700px] max-w-3xl bg-white text-black rounded-lg shadow-lg p-6">
        {isLoginForm ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};