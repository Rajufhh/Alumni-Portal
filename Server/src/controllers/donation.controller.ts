import { Request, Response } from "express";
import asyncHandler from "../utils/AsyncHandler";
import Donation from "../models/donation.models";
import APIResponse from "../utils/APIResponse";
import APIError from "../utils/APIError";
import User from "../models/user.models";
import { pagination } from "../utils/Pagination";

export const handleFetchAllDonations = asyncHandler(async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string).toLowerCase() || "";
    // Create a mongoDB filter
    const filter = {
      ...(search && {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
          { tags: { $regex: search, $options: "i" } }
        ]
      })
    };

    const total = await Donation.countDocuments(filter);
    const { startIndex, next, prev, totalPages } = pagination(page, limit, total);

    const donations = await Donation.find(filter).populate("author", "firstName role lastName profileImageURL _id").skip(startIndex).limit(limit).lean();

    res
      .status(200)
      .json(new APIResponse(200, { donations, totalPages, totalResults: total, pagination: { prev, next } }, "Successfully fetched all donations"));
  } catch (error: any) {
    console.log("Error in handleFetchAllDonations controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});

export const handleFetchDonationsByUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string).toLowerCase() || "";

    // Create a mongoDB filter
    const filter = {
      author: userId,
      ...(search && {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { author: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
          { tags: { $regex: search, $options: "i" } }
        ]
      })
    };

    const total = await Donation.countDocuments(filter);
    const { startIndex, next, prev, totalPages } = pagination(page, limit, total);

    if (!userId) {
      throw new APIError(400, "userId is required");
    }

    const user = await User.findById(userId).lean();

    if (!user) {
      throw new APIError(404, "Invalid userId");
    }

    const donations = await Donation.find(filter).skip(startIndex).limit(limit).lean().populate("author", "_id role firstName lastName profileImageURL");

    res
      .status(200)
      .json(new APIResponse(200, { donations, totalPages, totalResults: total, pagination: { prev, next } }, "Fetched user donations successfully"));
  } catch (error: any) {
    console.log("Error in handleFetchDonationsByUser controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});

export const handlePostDonation = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { content, author, title, tags, thumbnail, summary } = req.body;

    if (!content || !author || !title || !summary) {
      throw new APIError(400, "Invalid data");
    }

    const donationData = {
      content,
      author,
      title,
      tags: tags || [],
      thumbnail: thumbnail || "",
      summary
    };

    const donation = await Donation.create(donationData);

    if (!donation) {
      throw new APIError(400, "Error posting donation");
    }

    const payload = await Donation.findById(donation._id).populate("author", "firstName lastName role _id profileImageURL").lean();

    res
      .status(201)
      .json(new APIResponse(201, payload, "Posted donation successfully"));
  } catch (error: any) {
    console.log("Error in handlePostDonation controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});

export const handleDeleteDonation = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user?._id as string;

    if (!id) {
      throw new APIError(400, "donationId is required");
    }

    const donation = await Donation.findById(id).lean();

    if (!donation) {
      throw new APIError(404, "Donation not found");
    }

    if (donation.author.toString() !== userId.toString()) {
      throw new APIError(403, "Unauthorized request");
    }

    await Donation.deleteOne({ _id: id });

    res
      .status(200)
      .json(new APIResponse(200, "", "Deleted donation successfully"));
  } catch (error: any) {
    console.log("Error in handleDeleteDonation controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});

export const handleUpdateDonation = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { content, title, tags } = req.body;
    const userId = req.user?._id as string;

    const updates: { [key: string]: any } = {};
    if (content !== undefined) updates.content = content;
    if (title !== undefined) updates.title = title;
    if (tags !== undefined && tags.length) updates.tags = tags;

    if (!id) {
      throw new APIError(400, "donationId is required");
    }

    const donation = await Donation.findById(id).lean();

    if (!donation) throw new APIError(404, "Donation not found");

    if (donation.author.toString() !== userId.toString()) {
      throw new APIError(403, "Unauthorized to update this donation");
    }

    const updatedDonation = await Donation.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    ).lean().populate("author", "firstName lastName profileImageURL _id role");

    if (!updatedDonation) {
      throw new APIError(400, "Donation not found or unauthorized");
    }

    res
      .status(200)
      .json(new APIResponse(200, updatedDonation, "Successfully updated donation"));
  } catch (error: any) {
    console.log("Error in handleUpdateDonation controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});

export const handleFetchDonationById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new APIError(404, "donationId is required");
    }

    const donation = await Donation.findById(id).lean().populate("author", "firstName lastName _id profileImageURL role");

    if (!donation) {
      throw new APIError(404, "Donation not found");
    }

    res
      .status(200)
      .json(new APIResponse(200, donation, "Donation fetched successfully"));
  } catch (error: any) {
    console.log("Error in handleFetchDonationById controller: ", error);
    throw new APIError(500, error?.message || "Something went wrong");
  }
});
