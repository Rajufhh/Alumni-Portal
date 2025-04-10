import { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import Job from "../models/job.models";
import APIError from "../utils/APIError";
import APIResponse from "../utils/APIResponse";
import { pagination } from "../utils/Pagination";

export const handleFetchAllJobs = asyncHandler(async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string).toLowerCase() || "";
        
    // Create a mongoDB filter
    const filter = { 
        ...(search && {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ]
        })
    };

    const total = await Job.countDocuments(filter);
    const { startIndex, next, prev, totalPages } = pagination(page, limit, total);

    // Fetch all jobs
    const jobs = await Job.find(filter).lean().skip(startIndex).limit(limit).populate("owner", "_id role firstName lastName profileImageURL");

    res
        .status(200)
        .json(new APIResponse(200, { jobs, totalPages, totalResults: total, pagination: { prev, next } }, jobs.length ? "Successfully fetched all jobs" : "No jobs available"));
});

export const handleFetchJobsByUser = asyncHandler(async (req: Request, res: Response) => {
    // Fetch the jobs posted by [id] user
    const { id } = req.params;
     const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string ?? "").toLowerCase() || "";
        
    // Create a mongoDB filter
    const filter = {
        owner: id,
        ...(search && {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { company: { $regex: search, $options: "i" } }
            ]
        })
    };

    const total = await Job.countDocuments(filter);
    const { startIndex, next, prev, totalPages } = pagination(page, limit, total);

    if (!id){
        throw new APIError(404, "User id is required");
    }

    if (String(req.user?._id) !== id){
        throw new APIError(400, "Unauthorized request");
    }

    const jobs = await Job.find(filter).skip(startIndex).limit(limit).populate("owner", "_id role lastName firstName profileImageURL").lean();

    res
        .status(200)
        .json(new APIResponse(200, { jobs, totalPages, totalResults: total, pagination: { prev, next } }, jobs.length ? "Successfully fetched jobs posted by user" : "No jobs available"));
});

export const handlePostJob = asyncHandler(async (req: Request, res: Response) => {
    const id = req.user?._id;
    const { company, title, description, salary, location, url, jobType, skills } = req.body;

    if (!company || !title || !description || !salary || !location){
        throw new APIError(404, "Incomplete data to post job");
    }

    if (!id){
        throw new APIError(400, "User not found");
    }

    const job = await Job.create({
        owner: id,
        company,
        title,
        location,
        salary,
        description,
        url,
        jobType,
        skills
    });

    if (!job){
        throw new APIError(400, "Error posting job");
    }

    res
        .status(201)
        .json(new APIResponse(201, job, "Job posted successfully"));
});

export const handleDeleteJob = asyncHandler(async (req: Request, res: Response) => {
    const { jobId } = req.params;
    const id = req.user?._id as string;

    if (!id || !jobId){
        throw new APIError(404, "userId or jobId not found");
    }

    const job = await Job.findById(jobId).lean();

    if (!job){
        throw new APIError(404, "Job does not exist");
    }

    if (job.owner.toString() !== id.toString()){
        throw new APIError(400, "You are not authorized to delete this post");
    }

    await Job.deleteOne({ _id: jobId });

    res
        .status(200)
        .json(new APIResponse(200, "", "Post deleted successfully"));
});

export const handleUpdateJobPost = asyncHandler(async  (req: Request, res: Response) => {
    const { jobId } = req.params;
    const { company, title, description, salary, location, url, jobType } = req.body;

    const id = req.user?._id;

    if (!jobId){
        throw new APIError(400, "jobId is required");
    }

    const job = await Job.findById(jobId).lean();

    if (!job){
        throw new APIError(404, "Job not found");
    }

    if (job.owner.toString() !== id?.toString()){
        throw new APIError(400, "You are not authorized to update this post");
    }

    const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        { $set: { company, title, description, salary, location, url, jobType } },
        { new: true, runValidators: true }
    ).lean();

    if (!updatedJob){
        throw new APIError(400, "Error updating job post");
    }

    res
        .status(200)
        .json(new APIResponse(200, updatedJob, "Successfully updated job post"));
});

export const handleFetchJobById = asyncHandler(async  (req: Request, res: Response) => {
    const { jobId } = req.params;
    
    if (!jobId) {
        throw new APIError(404, "jobId is required");
    }

    const job = await Job.findById(jobId).lean().populate("owner", "firstName lastName role _id profileImageURL");

    if (!job){
        throw new APIError(404, "Job not found");
    }

    res
        .status(200)
        .json(new APIResponse(200, job, "Job fetched successfully"));
});