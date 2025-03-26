import { model, Types, Document, Schema } from 'mongoose'

interface Article extends Document {
    content: string;
    author: Types.ObjectId;
    title: string;
    tags: string[];
    thumbnail: string;
    likes: number;
};

const ArticleSchema = new Schema({
    content: { type: String, required: true, default: "" },
    title: { type: String, default: "" },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tags: [{ type: String }],
    thumbnail: { type: String },
    likes: { type: Number, default: 0 }
}, { timestamps: true } );

const Article = model<Article>("Article", ArticleSchema);
export default Article;