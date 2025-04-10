import { Schema, Document, Types, model } from 'mongoose'

interface Job extends Document {
    company: string;
    title: string;
    description: string;
    owner: Types.ObjectId;
    salary: string;
    location: string;
    url: string;
    jobType: "Full-time" | "Half-time";
    skills: [String];
}

const JobSchema = new Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    salary: { type: String, default: "" },
    location: { type: String, required: true },
    skills: [{ type: String, default: [] }],
    jobType: { type: String, enum: ["Full-time", "Half-time"] },
}, { timestamps: true });

const Job = model<Job>("Job", JobSchema);
export default Job;