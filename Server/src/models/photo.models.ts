import { Schema, Types, Document, model } from 'mongoose'

interface Photo extends Document {
    uploader: Types.ObjectId;
    url: string;
    description: string;
}

const PhotoSchema = new Schema({
    uploader: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });

const Photo = model<Photo>("Photo", PhotoSchema);
export default Photo;