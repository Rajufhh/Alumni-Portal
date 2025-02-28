import { Schema, Types, Document, model } from 'mongoose'

interface Message extends Document {
    sender: Types.ObjectId;
    receiver: Types.ObjectId;
    content: string;
    attachment: {
        type: 'video' | 'image' | 'file',
        url: string
    };
};

const MessageSchema = new Schema<Message>({
    sender: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, default: "" },
    attachment: { type: String, enum: [ 'image', 'video', 'file' ] },
}, { timestamps: true });

const Message = model<Message>("Message", MessageSchema);
export default Message;