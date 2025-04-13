import { useAuthorize } from "@/hooks/useAuthorize";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

export const Gallery = () => {
  useAuthorize();
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex justify-center items-center h-screen">
      {user?.role !== "student" && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Donation Campaign
        </button>
      )}
    </div>
  );
};
