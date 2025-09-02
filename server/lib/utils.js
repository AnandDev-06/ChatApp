import jwt from "jsonwebtoken";

//Function for generating token for a user
export const generateToken = (userId)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET);
    return token;
}