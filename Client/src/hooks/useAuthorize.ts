import { RootState } from "@/store/Store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const useAuthorize = () => {
    const { isFetched, user } = useSelector((state: RootState) => state.user);
    const navigate = useNavigate();

    useEffect(() => {      
        if (isFetched && user === null){
            console.log("!user");
            navigate("/");
        }
    }, [isFetched, user, navigate]);
}