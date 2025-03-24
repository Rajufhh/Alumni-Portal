import { IUser } from "../models/user.models";

export const generateAccessAndRefreshToken = (user: IUser) => {
    try {
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        if (!accessToken || !refreshToken){
            throw Error("Error generating tokens");
        }

        return { accessToken, refreshToken };
    }
    catch(error) {
        throw Error("Error generating tokens");
    }
}