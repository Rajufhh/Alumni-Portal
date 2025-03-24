import { Request, Response } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import Job from "../../models/job.models";
import APIError from "../../utils/APIError";
import APIResponse from "../../utils/APIResponse";
import User from "../../models/user.models";
import { Types } from "mongoose";

export const handleFetchAllJobs = asyncHandler(async (req: Request, res: Response) => {
    // Fetch all jobs
    const jobs = await Job.find({}).lean();

    if (!jobs){
        throw new APIError(400, "Error fetching jobs");
    }

    res
        .status(200)
        .json(new APIResponse(200, jobs, jobs.length ? "Successfully fetched all jobs" : "No jobs available"));
});

export const handleFetchJobsByUser = asyncHandler(async (req: Request, res: Response) => {
    // Fetch the jobs posted by [id] user
    const { id } = req.params;

    if (!id){
        throw new APIError(404, "User id is required");
    }

    const jobs = await Job.find({ owner: id }).lean();

    if (!jobs){
        throw new APIError(400, "Error fetching user jobs");
    }

    res
        .status(200)
        .json(new APIResponse(200, jobs, jobs.length ? "Successfully fetched jobs posted by user" : "No jobs available"));
});

export const handlePostJob = asyncHandler(async (req: Request, res: Response) => {
    const id = req.user?._id;
    const { company, title, description, salary, location } = req.body;

    if (!company || !title || !description || !salary || !location){
        throw new APIError(404, "Incomplete data to post job");
    }

    if (!id){
        throw new APIError(400, "User not found");
    }

    const owner = await User.findById(id).lean();

    if (!owner){
        throw new APIError(400, "Invalid user id");
    }

    const job = await Job.create({
        owner: owner._id,
        company,
        title,
        location,
        salary,
        description
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
    const id = req.user?._id;

    if (!id || !jobId){
        throw new APIError(404, "userId or jobId not found");
    }

    const owner = await User.findById(id).lean();

    if (!owner){
        throw new APIError(404, "User does not exist");
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
    const { company, title, description, salary, location } = req.body;

    if (!req.user){
        throw new APIError(400, "Unauthorized access");
    }

    const id = req.user._id;

    if (!jobId){
        throw new APIError(400, "jobId is required");
    }

    const job = await Job.findById(jobId).lean();

    if (!job){
        throw new APIError(404, "Job not found");
    }

    if (job.owner.toString() !== id.toString()){
        throw new APIError(400, "You are not authorized to update this post");
    }

    const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        { $set: { company, title, description, salary, location } },
        { new: true, runValidators: true }
    ).lean();

    if (!updatedJob){
        throw new APIError(400, "Error updating job post");
    }

    res
        .status(200)
        .json(new APIResponse(200, updatedJob, "Successfully updated job post"));
});