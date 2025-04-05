import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormActive = email.trim() !== "" && password.trim() !== "";

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormActive) return;

    // TODO: Handle authentication logic here
    console.log("Logging in with:", { email, password });
    };

    const submitForm = async () => {
        const values = { email, password }

        const response = await axios.post("http://localhost:3000/api/login", values, { withCredentials: true });
        const accessToken = response.data.data.accessToken;
        const refreshToken = response.data.data.refreshToken;
        const user = response.data.data.user;

        dispatch(setUser(user));

        if (!accessToken || !refreshToken){
            throw new Error("Error while signing up");
        }

        // Store the tokens for authorization purposes
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Navigate the user to the dashboard/home page
        navigate("/home");
    }



  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border border-gray-300"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div className="flex justify-end mb-4">
          <a
            href="#"
            className="text-sm text-black hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={!isFormActive}
          className={`w-full py-3 rounded text-white font-medium transition-colors cursor-pointer ${
            isFormActive
              ? "bg-black"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={submitForm}
        >
          Sign In →
        </button>
      </form>
    </div>
  );
};
