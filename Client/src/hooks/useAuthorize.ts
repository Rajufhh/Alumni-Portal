import { RootState } from "@/store/Store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useAuthorize = () => {
    const { loading, user } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {      
        console.log(user);
        if (!loading && user === null){
            console.log("!user");
            navigate("/");
        }
    }, [user, loading, navigate]);
}