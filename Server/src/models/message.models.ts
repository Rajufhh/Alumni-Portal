import mongoose, { Schema, Document, Model } from 'mongoose';

export interface Message extends Document {
  chat: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  content: string;
}

const messageSchema = new Schema<Message>(
  {
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message: Model<Message> = mongoose.model<Message>('Message', messageSchema);
