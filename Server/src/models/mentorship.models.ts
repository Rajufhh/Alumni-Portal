import { Schema, Document, model, Types } from 'mongoose'

export interface Mentorship extends Document {
    student: Types.ObjectId;
    alumni: Types.ObjectId;
    status: "pending" | "accepted" | "rejected";
    completionStatus: "inactive" | "active" | "completed"
};

const MentorshipSchema = new Schema<Mentorship>({
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    alumni: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
    completionStatus: { type: String, enum: ["inactive", "active", "completed"], default: "inactive" }
}, { timestamps: true });

const Mentorship = model<Mentorship>("Mentorship", MentorshipSchema);
export default Mentorship;