import { Schema, Document, Types, model } from 'mongoose'

interface Comment extends Document {
    author: Types.ObjectId;
    content: string;
    post: Types.ObjectId;
}

const CommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
}, { timestamps: true });

const Comment = model<Comment>("Comment", CommentSchema);
export default Comment;