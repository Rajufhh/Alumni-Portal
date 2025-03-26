// Post a comment
// Delete a comment
// Fetch user comments
// Fetch all comments on a post
// Update comment 

import { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import APIError from "../utils/APIError";
import Comment from "../models/comment.models";
import APIResponse from "../utils/APIResponse";
import User from "../models/user.models";

export const handlePostComment = asyncHandler(async (req: Request, res: Response) => {
    const { postId } = req.params;
    const { content } = req.body;

    const id = req.user?._id as string;

    if (!postId || !content){
        throw new APIError(400, "Missing postId or content");
    }

    const comment = await Comment.create({
        author: id,
        content,
        post: postId
    });

    if (!comment){
        throw new APIError(400, "Error posting comment");
    }

    res
        .status(200)
        .json(new APIResponse(200, comment, "Posted comment successfully"));
});

export const handleDeleteComment = asyncHandler(async (req: Request, res: Response) => {
    const { commentId } = req.params;
    const id = req.user?._id as string;

    if (!commentId){
        throw new APIError(400, "Missing commentId");
    }

    const comment = await Comment.findById(commentId).lean();

    if (!comment){
        throw new APIError(400, "Comment not found");
    }

    if (comment.author.toString() !== id){
        throw new APIError(400, "Unauthorized request");
    }

    await Comment.deleteOne({ _id: commentId });

    res
        .status(200)
        .json(new APIResponse(200, null, "Deleted comment successfully"));
});

export const handleUpdateComment = asyncHandler(async (req: Request, res: Response) => {
    const { commentId } = req.params;
    const { content } = req.body;
    const id = req.user?._id as string;

    if (!commentId || !content) {
        throw new APIError(400, "Missing commentId or content");
    }

    const comment = await Comment.findById(commentId).lean();

    if (!comment){
        throw new APIError(400, "Comment not found");
    }

    if (comment.author.toString() !== id){
        throw new APIError(400, "Unauthorized request");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
        commentId,
        { $set: { content: content } },
        { new: true, runValidators: true }
    );

    if (!updatedComment){
        throw new APIError(400, "Error while updating comment");
    }

    res
        .status(200)
        .json(new APIResponse(200, updatedComment, "Updated comment successfully"));
});

export const handleFetchUserComments = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId){
        throw new APIError(400, "Missing userId");
    }

    const user = await User.findOne({ _id: userId }).lean();

    if (!user){
        throw new APIError(400, "User not found");
    }

    const comments = await Comment.find({ author: userId }).populate("author", "firstName profileImageURL _id").lean();

    res
        .status(200)
        .json(new APIResponse(200, comments || [], comments.length? "Fetched all user comments successfully" : "No comments found"));
});

export const handleFetchAllPostComments = asyncHandler(async (req: Request, res: Response) => {
    const { postId } = req.params;

    if (!postId) {
        throw new APIError(400, "Missing postId");
    }

    const comments = await Comment.find({ post: postId }).populate("author", "firstName profileImageURL _id").lean();

    res
        .status(200)
        .json(new APIResponse(200, comments || [], comments.length? "Fetched all post comments successfully" : "No comments found"));
});