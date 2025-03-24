import { Schema, Document, Types, model } from 'mongoose'

interface Job extends Document {
    company: string;
    title: string;
    description: string;
    owner: Types.ObjectId;
    salary: string;
    location: string;
}

const JobSchema = new Schema({
    company: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    salary: { type: String, default: "" },
    location: { type: String, required: true }
}, { timestamps: true });

const Job = model<Job>("Job", JobSchema);
export default Job;