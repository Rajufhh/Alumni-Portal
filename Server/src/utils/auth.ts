import User from "../models/user.models";

export const generateAccessAndRefreshToken = (user: User) => {
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