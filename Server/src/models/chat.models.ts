import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Chat extends Document {
  participants: mongoose.Types.ObjectId[];
  lastMessage?: mongoose.Types.ObjectId;
  unreadCount: { user: mongoose.Types.ObjectId, count: number }[];
}

const chatSchema: Schema<Chat> = new Schema(
  {
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
    unreadCount: [{ user: { type: Schema.Types.ObjectId, ref: "User" }, count: { type: Number, default: 0 } }]
  },
  { timestamps: true }
);

export const Chat: Model<Chat> = mongoose.model<Chat>('Chat', chatSchema);
