import mongoose, { Schema } from 'mongoose';

const donationSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    thumbnail: {
        type: String
    },
    summary: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
