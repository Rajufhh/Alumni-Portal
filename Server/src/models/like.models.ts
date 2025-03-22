import { Schema, Document, Types, model } from 'mongoose'

interface Like extends Document {
    user: Types.ObjectId;
    post: Types.ObjectId;
}

const LikeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
}, { timestamps: true });

const Like = model<Like>("Like", LikeSchema);
export default Comment;