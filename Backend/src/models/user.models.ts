import { Schema, Document, model } from 'mongoose'
import { USER_ROLES } from '../utils/constants';
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { USER_TEMPORARY_TOKEN_EXPIRY } from '../utils/constants';

interface User extends Document {
    firstName: string;
    lastName?: string;
    email: string;
    password: string;
    dob: Date;
    profileImageURL: string;
    role: USER_ROLES;
    batch: Date;
    interests: string[];
    skills: string[];
    bio: string;
    refreshToken: string;
    jobDetails: {
        company: string,
        title: string,
    };
    previousCompanies: string[];
    internships: string[];
    location: string;
    linkedin: string;
    github: string;

    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
    generateTemporaryToken(): { unhashedToken: string, hashedToken: string, tokenExpiry: number }
};

const UserSchema = new Schema<User>({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    password: { type: String, required: true },
    dob: { type: Date },
    profileImageURL: { type: String, default: "" },
    role: { type: String, enum: Object.values(USER_ROLES), required: true },
    batch: { type: Date, required: true },
    skills: [{ type: String }],
    interests: [{ type: String }],
    bio: { type: String },
    refreshToken: { type: String },
    jobDetails: {
        company: { type: String, default: "" },
        title: { type: String, default: "" }
    },
    location: { type: String, default: "" },
    previousCompanies: [{ type: String }],
    internships: [{ type: String }],
    linkedin: { type: String, required: true },
    github: { type: String, required: true }
}, { timestamps: true });

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    
    try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
    }
    catch(error) {
        return next(error as Error);
    }
});

UserSchema.methods.isPasswordCorrect = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function () {

    const secretKey = process.env.ACCESS_TOKEN_SECRET;
    const tokenExpiry = Number(process.env.ACCESS_TOKEN_EXPIRY);

    if (!secretKey){
        throw new Error("Could not find ACCESS_TOKEN_SECRET");
    }
    
    if (!tokenExpiry){
        throw new Error("Could not find ACCESS_TOKEN_EXPIRY");
    }

    const payload = {
        _id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        email: this.email,
    }

    return jwt.sign(payload, secretKey, { expiresIn: tokenExpiry });
}


UserSchema.methods.generateRefreshToken = function () {

    const secretKey = process.env.REFRESH_TOKEN_SECRET;
    const expiry = Number(process.env.REFRESH_TOKEN_EXPIRY);


    if (!expiry){
        throw new Error("Could not find REFRESH_TOKEN_EXPIRY");
    }

    if (!secretKey){
        throw new Error("Could not find REFRESH_TOKEN_SECRET");
    }

    const payload = {
        _id: this._id.toString(),
    };

    return jwt.sign(payload, secretKey, { expiresIn: expiry });
};

UserSchema.methods.generateTemporaryToken = function () {
    // This token should be sent to the client
    const unHashedToken = crypto.randomBytes(20).toString("hex");
  
    // This should stay in the DB to compare at the time of verification
    const hashedToken = crypto
      .createHash("sha256")
      .update(unHashedToken)
      .digest("hex");
    // This is the expiry time for the token (20 minutes)
    const tokenExpiry = Date.now() + USER_TEMPORARY_TOKEN_EXPIRY;
  
    return { unHashedToken, hashedToken, tokenExpiry };
};

const User = model<User>("User", UserSchema);
export default User;