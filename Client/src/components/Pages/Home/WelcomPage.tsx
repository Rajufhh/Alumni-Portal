// import { RootState } from "@/store/Store";
// import { useEffect } from "react"
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";

// export const Home = () => {

//   const user = useSelector((state: RootState) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user){
//       // Not authenticated
//       navigate("/");
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen text-white flex items-center justify-center text-4xl bg-[#222]">Home</div>
//   )
// }
// // bg-[hsl(240,10%,3.9%)]

import { Link, useNavigate } from "react-router-dom";
import homepageImage from "../../../assets/homepage.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";
import { useEffect } from "react";

export const WelcomePage = () => {
  const user = useSelector((state: RootState) => state.user.user)
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/home');
    }
  }, []);

  const testimonials = [
    { name: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Jane Smith", text: "Vestibulum tincidunt eros ut orci aliquam, non tincidunt nulla convallis." },
    { name: "Robert Johnson", text: "Aliquam erat volutpat. Donec bibendum malesuada ipsum." },
    { name: "Emily Davis", text: "Curabitur convallis quam at justo sodales, non fringilla lorem consequat." },
    { name: "Michael Brown", text: "Sed eget augue sed justo dignissim interdum. Nunc nec mi metus." },
    { name: "Sarah Wilson", text: "Fusce at risus ac arcu aliquam consectetur non at erat." },
    { name: "Emory Howard", text: "Curabitur convallis quam at justo sodales, non fringilla lorem consequat." },
    { name: "Peter Green", text: "Sed eget augue sed justo dignissim interdum. Nunc nec mi metus." },
    { name: "Alison Brooke", text: "Fusce at risus ac arcu aliquam consectetur non at erat." },
  ];

  return (
    <div className="px-4 md:px-12 lg:px-24 py-10 space-y-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay <span className="text-blue-600">connected</span>,<br />
            Stay <span className="text-blue-600">inspired</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 font-medium">
            Your alumni network <span className="text-blue-600">awaits</span>
          </h2>
          <div className="flex gap-4 mt-4">
            <Link to="/">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Login
              </button>
            </Link>
            <Link to="/">
              <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition">
                Sign Up
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <h3 className="text-lg font-semibold">
                <span className="text-blue-600">1000+</span> Alumni Connected
              </h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <span className="text-blue-600">500+</span> Job Postings
              </h3>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                <span className="text-blue-600">100+</span> Meetups
              </h3>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={homepageImage} alt="Hero" className="rounded-xl shadow-lg w-full" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold mb-2">{testimonial.name}</h4>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Link to="/login" className="p-6 border rounded-lg hover:bg-gray-50 transition">
            <div className="text-3xl mb-2">📂</div>
            <p className="font-semibold">Alumni Directory</p>
          </Link>
          <Link to="/login" className="p-6 border rounded-lg hover:bg-gray-50 transition">
            <div className="text-3xl mb-2">📌</div>
            <p className="font-semibold">Job Postings Board</p>
          </Link>
          <Link to="/login" className="p-6 border rounded-lg hover:bg-gray-50 transition">
            <div className="text-3xl mb-2">🎉</div>
            <p className="font-semibold">Events & Reunions</p>
          </Link>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="inline-block px-6 py-4 bg-blue-50 text-blue-600 border border-blue-600 rounded-lg shadow hover:bg-blue-100 transition"
          >
            💡 Mentorship Guidance from Fellow Alumni
          </Link>
        </div>
      </div>
    </div>
  );
};