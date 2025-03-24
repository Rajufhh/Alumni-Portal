import { IUser } from "../models/user.models";

declare module "express-serve-static-core" {
  interface Request {
    user?: IUser;
  }
}