import { RootState } from "@/store/Store";
import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Home = () => {

  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user){
      // Not authenticated
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-[hsl(240,10%,3.9%)] text-white flex items-center justify-center text-4xl">Home</div>
  )
}
