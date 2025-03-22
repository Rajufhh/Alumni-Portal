import { body } from "express-validator";
import { USER_ROLES } from "../utils/constants";

export const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Invalid Email"),
        
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required"),
        
        body("firstName")
            .trim()
            .notEmpty()
            .withMessage("First Name is required"),

        body("lastName")
            .trim()
            .notEmpty()
            .withMessage("Last Name is required"),  
    ]
}

export const userLoginValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Invalid Email"),
        
        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
    ]
};