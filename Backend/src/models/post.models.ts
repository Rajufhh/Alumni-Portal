import { model, Types, Document, Schema } from 'mongoose'
import { POST_TYPES } from '../utils/constants';

interface Post extends Document {
    content: string;
    author: Types.ObjectId;
    title: string;
    media: {
        type: 'image' | 'video',
        url: string,
    };
    type: POST_TYPES
};

const PostSchema = new Schema({
    content: { type: String, required: true, default: "" },
    title: { type: String, default: "" },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    media: {
        type: { type: String, enum: [ 'video', 'image' ] },
        url: { type: String },
    },
    type: { type: String, enum: Object.values(POST_TYPES), required: true }
}, { timestamps: true } );

const Post = model<Post>("Post", PostSchema);
export default Post;