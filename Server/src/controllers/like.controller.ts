// Like a post
// Unlike a post
// Get post like count
// Get user liked posts
// Get all the liked users for a post

import { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import APIError from "../utils/APIError";
import Like from "../models/like.models";
import Article from "../models/article.models";
import APIResponse from "../utils/APIResponse";

export const handleLikePost = asyncHandler(async (req: Request, res: Response) => {
    const { postId } = req.params;
    const { postType } = req.body;
    const id = req.user?._id as string;

    if (!postId || !postType){
        throw new APIError(400, "postId & postType is required");
    }

    const post = await Article.findById(postId).lean();

    if (!post){
        throw new APIError(400, "Post does not exist");
    }

    const existingLike = await Like.findOne({
        post: postId,
        user: id,
        postType
    });

    if (existingLike){
        throw new APIError(400, "You've already liked this post");
    }

    // Create a Like document
    const like = await Like.create({
        user: id,
        post: postId,
        postType
    });

    if (!like){
        throw new APIError(400, "Error liking the post");
    }

    // Update likes count in post document
    // Add other types later
    // For now, just implementing for articles
    const updatedArticle = await Article.findByIdAndUpdate(
        postId,
        { $inc: { likes: 1 } },
        { new: true, runValidators: true }
    );

    res
        .status(200)
        .json(new APIResponse(200, like, "Post liked successfully"));
});

export const handleUnlikePost = asyncHandler(async (req: Request, res: Response) => {
    const { postId } = req.params;
    const { postType } = req.body;
    const id = req.user?._id as string;

    if (!postId || !postType){
        throw new APIError(400, "postId or postType missing");
    }

    const post = await Article.findById(postId).lean();

    if (!post){
        throw new APIError(400, "Post does not exist");
    }

    const existingLike = await Like.findOne({
        post: postId,
        user: id,
        postType
    }).lean();

    if (!existingLike){
        throw new APIError(400, "Like does not exist");
    }

    await Like.deleteOne({
        _id: existingLike._id
    });

    const updatedArticle = await Article.findByIdAndUpdate(
        postId,
        { $inc: { likes: -1 } },
        { new: true, runValidators: true }
    );

    if (!updatedArticle){
        throw new APIError(400, "Error while updating article");
    }

    if (updatedArticle.likes < 0){
        await Article.findByIdAndUpdate(postId, { likes: 0 });
    }

    res
        .status(200)
        .json(new APIResponse(200, null, "Post unliked successfully"));
});

export const handleGetLikesOnPost = asyncHandler(async (req: Request, res: Response) => {
    const { postId } = req.params;
    const id = req.user?._id as string;

    if (!postId){
        throw new APIError(400, "Missing postId");
    }

    const likes = await Like.find({ post: postId, user: id }).populate("user", "firstName profileImageURL _id").lean();

    res
        .status(200)
        .json(new APIResponse(200, likes || [], likes.length? "Successfully fetched post likes" : "No likes found"));
});

export const handleGetAllPostsLikedByUser = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user?._id as string;

    const likes = await Like.find({ user: userId }).populate("post", "title content _id").lean();

    res
        .status(200)
        .json(new APIResponse(200, likes || [], likes.length? "Successfully fetched all posts liked by user" : "No likes found"));
}); 