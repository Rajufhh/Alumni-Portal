import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMessage extends Document {
  chat: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  content: string;
  attachmentURL?: string;
  attachmentType?: "image" | "video" | "file";
  fileName?: string;
  fileSize?: number;
}

const messageSchema = new Schema<IMessage>(
  {
    chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    attachmentURL: { type: String },
    attachmentType: { type: String, enum: ["image", "video", "file"] },
    fileName: { type: String },
    fileSize: { type: Number },
  },
  { timestamps: true }
);

export const Message: Model<IMessage> = mongoose.model<IMessage>(
  "Message",
  messageSchema
);
