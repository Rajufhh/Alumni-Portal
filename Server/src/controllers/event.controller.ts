    import { Request, Response } from "express";
    import asyncHandler from "../utils/AsyncHandler";
    import Event from "../models/event.models";
    import APIResponse from "../utils/APIResponse";
    import APIError from "../utils/APIError";
    import mongoose from "mongoose";
import { pagination } from "../utils/Pagination";

    export interface Results {
        next?: {
            page: number;
            limit: number;
        };
        prev?: {
            page: number;
            limit: number;
        }
    }

    export const handleFetchAllEvents = asyncHandler(async (req: Request, res: Response) => {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const search = (req.query.search as string).toLowerCase() || "";
        
        
        // Create a mongoDB filter
        const filter =  search ? {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { owner: { $regex: search, $options: "i" } },
            ]
        } : {};

        const total = await Event.countDocuments(filter);
        const { startIndex, next, prev, totalPages } = pagination(page, limit, total);

        const events = await Event.find(filter).skip(startIndex).limit(limit).populate("owner", "_id profileImageURL firstName lastName");

        res
            .status(200)
            .json(new APIResponse(200, { events, totalPages, totalResults: total, pagination: { prev, next } }, events.length ? "Events fetched successfully" : "No Events available"));
    });

    export const handleFetchEventsByUser = asyncHandler(async (req: Request, res: Response) => {
        const { id } = req.params;

        if (!id){
            throw new APIError(400, "userId is required");
        }

        const events = await Event.find({ owner: id }).lean();

        res
            .status(200)
            .json(new APIResponse(200, events, events.length ? "Events fetched successfully" : "No Events available"));
    });

    export const handlePostEvent = asyncHandler(async (req: Request, res: Response) => {
        const { title, location, date, time, description, entryFee } = req.body;
        const id = req.user?._id;

        if (req.user?.role !== "alumni" && req.user?.role !== "admin"){
            throw new APIError(400, "Unauthorized request");
        }

        if (!id){
            throw new APIError(400, "Unauthorized request");
        }

        const event = await Event.create({
            title,
            location,
            date,
            time,
            description,
            entryFee,
            owner: id,
            rsvps: []
        });

        if (!event){
            throw new APIError(400, "Error posting event");
        }

        res
            .status(201)
            .json(new APIResponse(201, event, "Event posted successfully"));
    });

    export const handleDeleteEvent = asyncHandler(async (req: Request, res: Response) => {
        const { eventId } = req.params;
        const id = req.user?._id as string;

        if (!eventId){
            throw new APIError(404, "eventId is required");
        }

        if (req.user?.role !== "alumni" && req.user?.role !== "admin"){
            throw new APIError(400, "Unauthorized request");
        }

        const event = await Event.findById(eventId).lean();

        if (!event){
            throw new APIError(404, "Event not found");
        }

        if (event.owner.toString() !== id.toString()){
            throw new APIError(400, "Unauthorized request");
        }
        
        await Event.deleteOne({ _id: eventId });

        res
            .status(200)
            .json(new APIResponse(200, "", "Event deleted successfully"));
    });

    export const handleUpdateEvent = asyncHandler(async (req: Request, res: Response) => {
        const { eventId } = req.params;
        const id = req.user?._id as string;
        const { title, location, date, time, description, entryFee } = req.body;

        if (!eventId){
            throw new APIError(400, "eventId is required");
        }

        if (req.user?.role !== "alumni" && req.user?.role !== "admin"){
            throw new APIError(400, "Unauthorized request");
        }

        const event = await Event.findById(eventId).lean();

        if (!event){
            throw new APIError(404, "Event not found");
        }

        if (event.owner.toString() !== id.toString()){
            throw new APIError(400, "Unauthorized request");
        }

        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { $set: { title, location, date, time, description, entryFee } },
            { new: true, runValidators: true }
        ).lean();
        
        res
            .status(200)
            .json(new APIResponse(200, updatedEvent, "Updated event successfully"));
    });

    export const handleRsvpForEvent = asyncHandler(async (req: Request, res: Response) => {
        const { eventId } = req.params;
        const id = req.user?._id as string;

        if (!eventId){
            throw new APIError(400, "eventId is required");
        }

        const event = await Event.findById(eventId);

        if (!event){
            throw new APIError(400, "Event not found");
        }

        if (event.rsvps.some((userId) => userId.equals(id))){
            throw new APIError(400, "Already rsvp'd");
        }

        event.rsvps.push(new mongoose.Types.ObjectId(id));

        await event.save();

        res
            .status(200)
            .json(new APIResponse(200, event, "Successfully registered for the event"));
    });

    export const handleRemoveRsvp = asyncHandler(async (req: Request, res: Response) => {
        const { eventId } = req.params;
        const id = req.user?._id as string;

        if (!eventId){
            throw new APIError(400, "eventId is required");
        }

        const event = await Event.findById(eventId);

        if (!event){
            throw new APIError(400, "Event not found");
        }

        if (event.rsvps.some((userId) => userId.equals(id))){
            event.rsvps = event.rsvps.filter(userId => userId.toString() !== id.toString());
        }
        else{
            throw new APIError(400, "No rsvp");
        }

        await event.save();

        res
            .status(200)
            .json(new APIResponse(200, event, "Successfully unregistered for the event"));
    });

