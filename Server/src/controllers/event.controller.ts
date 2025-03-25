import { Request, Response } from "express";
import asyncHandler from "../../utils/AsyncHandler";
import Event from "../../models/event.models";
import APIResponse from "../../utils/APIResponse";
import APIError from "../../utils/APIError";

export const handleFetchAllEvents = asyncHandler(async (req: Request, res: Response) => {
    const events = await Event.find({}).lean();

    res
        .status(200)
        .json(new APIResponse(200, events, events.length ? "Events fetched successfully" : "No Events available"));
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
    const id = req.user?._id;

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
    const id = req.user?._id;
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

