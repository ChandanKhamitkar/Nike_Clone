import express from "express";
import bcrypt from "bcrypt";
import Users from "../../models/userModel.js";
import jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();

router.post("/loginUser", async(req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({message : "All fields are mandatory."});
      }

    try {
        const user = await Users.findOne({email : email});
        if(user && await bcrypt.compare(password, user.password)){
            console.log("Login Successfull.");
            
            const createdAtTimestamp = new Date(user.createdAt);
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const monthName = monthNames[createdAtTimestamp.getMonth()];
            const tokenPayload = {
                userId : user._id,
                email : user.email,
                firstname : user.firstname,
                lastname : user.lastname,
                coutry : user.country,
                pincode : user.pincode,
                address : user.address,
                month : monthName,
                year : createdAtTimestamp.getFullYear(),
            };
            const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET, {expiresIn : "15m"});
            res.cookie("auth_token", token, { httpOnly: true });

            res.status(200).json({
                message : "Login Successfull.",
                firstname : user.firstname,
                 token : token}); 
        }
        else{
            console.log("Invalid password or user not found.");
            res.status(400).json({message : "Invalid password or user not found."});
        }
    }catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

export default router;