import { model, Types, Document, Schema } from 'mongoose'

interface Tweet extends Document {
    content: string;
    author: Types.ObjectId;
    title: string;
    likes: number;
};

const TweetSchema = new Schema({
    content: { type: String, required: true, default: "" },
    title: { type: String, default: "" },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: { type: Number, default: 0 }
}, { timestamps: true } );

const Tweet = model<Tweet>("Tweet", TweetSchema);
export default Tweet;