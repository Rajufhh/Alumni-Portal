// create article
// delete article
// update article
// fetch user articles
// fetch all articles

import { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import Article from "../models/article.models";
import APIResponse from "../utils/APIResponse";
import APIError from "../utils/APIError";
import User from "../models/user.models";

export const handleFetchAllArticles = asyncHandler(async (req: Request, res: Response) => {
    const articles = await Article.find({}).populate("author", "firstName lastName profileImageURL _id");

    res
        .status(200)
        .json(new APIResponse(200, articles || [], "Successfully fetched all articles"));
});

export const handleFetchArticlesByUser = asyncHandler(async (req: Request, res: Response) => {
    const { userId } = req.params;

    if (!userId){
        throw new APIError(400, "userId is required");
    }

    const user = await User.findById(userId).lean();

    if (!user){
        throw new APIError(404, "Invalid userId");
    }

    const articles = await Article.find({ author: userId }).lean();
    
    res
        .status(200)
        .json(new APIResponse(200, articles || [], "Fetched user articles successfully"));
});

export const handlePostArticle = asyncHandler(async (req: Request, res: Response) => {
    const { content, author, title, tags, thumbnail } = req.body;

    if (!content || !author || !title || !tags || !thumbnail){
        throw new APIError(400, "Invalid data");
    }

    const article = await Article.create({
        content,
        author,
        title,
        tags,
        thumbnail
    });

    if (!article){
        throw new APIError(400, "Error posting article");
    }

    res
        .status(201)
        .json(new APIResponse(201, article, "Posted article successsfully"));
}); 

export const handleDeleteArticle = asyncHandler(async (req: Request, res: Response) => {
    const { articleId } = req.params;
    const id = req.user?._id as string;

    if (!articleId){
        throw new APIError(400, "articleId is required");
    }

    const article = await Article.findById(articleId).lean();

    if (!article){
        throw new APIError(404, "Article not found");
    }

    if (article.author.toString() !== id.toString()){
        throw new APIError(400, "Unauthorized request");
    }

    await Article.deleteOne({ _id: articleId });

    res
        .status(200)
        .json(new APIResponse(200, "", "Deleted article successfully"));
});

export const handleUpdateArticle = asyncHandler(async (req: Request, res: Response) => {
    const { articleId } = req.params;
    const { content, title, tags } = req.body;
    const id = req.user?._id as string;

    const updates: { [key: string]: any } = {};
    if (content !== undefined) updates.content = content;
    if (title !== undefined) updates.title = title;
    if (tags !== undefined && tags.length) updates.tags = tags;

    if (!articleId){
        throw new APIError(400, "articleId is required");
    }

    const article = await Article.findById(articleId).lean();

    if (!article){
        throw new APIError(404, "Article not found");
    }

    if (article.author.toString() !== id){
        throw new APIError(400, "Unauthorized request");
    }

    const updatedArticle = await Article.findByIdAndUpdate(
        articleId,
        { $set: updates },
        { new: true, runValidators: true }
    ).lean();

    if (!updatedArticle){
        throw new APIError(400, "Error updating article");
    }

    res
        .status(200)
        .json(new APIResponse(200, updatedArticle, "Successfully updated article"));
});     