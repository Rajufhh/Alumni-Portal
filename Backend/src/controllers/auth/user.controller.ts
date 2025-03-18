import { Request, Response } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import User from "../../models/user.models";
import APIResponse from "../../utils/APIResponse";
import APIError from "../../utils/APIError";
import { generateAccessAndRefreshToken } from "../../utils/auth";
import jwt from "jsonwebtoken"

export const handleUserLogin = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Fetch user sent data
    // Search for user
    // If !user, return
    // Verify password
    // Create refresh and access tokens
    // Send them via secure cookies

    const user = await User.findOne({ email: email });

    if (!user){
        throw new APIError(404, "User not found!");
    }

    const isSamePassword = await user.isPasswordCorrect(password);

    if (!isSamePassword){
        throw new APIError(400, "Invalid password!");
    }

    const { accessToken, refreshToken } = generateAccessAndRefreshToken(user);

    user.refreshToken = refreshToken;
    await user.save();

    const options = {
        httpOnly: true,
        secure: true
    };

    // const data = {
    //     firstName: user.firstName,
    //     lastName: user.lastName,
    //     email: user.email,
    //     refreshToken,
    //     accessToken,
    //     profileImageURL: user.profileImageURL ?? "",
    //     _id: user._id
    // };


    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new APIResponse(200, { accessToken, refreshToken }, "User Logged In successfully!"))

});

export const handleUserSignUp = asyncHandler(async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await User.findOne({ email: email });

    if (existingUser){
        throw new APIError(400, "User already exists");
    }   

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        role
    });

    if (!user){
        throw new APIError(400, "Error Signing Up");
    }

    const { accessToken, refreshToken } = generateAccessAndRefreshToken(user);

    const options = {
        httpOnly: true,
        secure: true
    };

    res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new APIResponse(201, { accessToken, refreshToken }, "User Signed Up successfully!"));
});

export const handleUserLogout = asyncHandler(async (req: Request, res: Response) => {

    // Search up the user, delete the stored refresh token
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $unset: {
                refreshToken: 1
            }
        }
    );

    const options = {
        httpOnly: true,
        secure: true
    };

    res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new APIResponse(200, "User Logged out successfully"))
}); 

export const handleRefreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
    // Fetch the client side refresh token
    // Compare with  the one stored in db
    // If not match, Unauthorized access
    // Else, generate new access, refresh tokens and return
    const incomingRefreshToken = req.cookies?.refreshToken;

    if (!incomingRefreshToken){
        throw new APIError(401, "Invalid Refresh Token");
    }

    try {

        if (!process.env.REFRESH_TOKEN_SECRET) {
            throw new APIError(404, "REFRESH_TOKEN_SECRET not found");
        }

        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

        if (typeof decodedToken !== "object" || decodedToken === null){
            throw new APIError(400, "Invalid Refresh Token");
        }

        const user = await User.findOne({ _id: decodedToken._id });

        if (incomingRefreshToken !== user?.refreshToken || !user){
            throw new APIError(401, "Invalid Refresh Token");
        }

        const options = {
            httpOnly: true,
            secure: true
        };

        const { accessToken, refreshToken } = generateAccessAndRefreshToken(user);

        user.refreshToken = refreshToken;
        await user.save();

        res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(new APIResponse(200, { accessToken, refreshToken }, "Refreshed Access Token"));
    }
    catch(error) {
        throw new APIError(401, "Invalid Refresh Token");
    }

});

export const handleUpdateUserPassword = asyncHandler(async (req: Request, res: Response) => {
    // Fetch new password from user
    // Compare the old and new passwords
    // If match, throw error
    // update user in db
});

export const handleUpdateAccountDetails = asyncHandler(async (req: Request, res: Response) => {
    // Fetch new details from user
    // update user in db
});