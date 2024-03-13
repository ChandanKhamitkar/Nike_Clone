import express from "express";
import Users from "../../models/userModel.js";
import { generateOTP } from "../../services/otp.js";
import { sendEmail } from "../../services/email.js";

const router = express.Router();

router.post("/checkUser", async (req,res) => {
    const {email , country} = req.body;
    
    if(!email || !country){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    const user = await Users.findOne({email : email});

    if(user){
        if(user.verified === true){
            res.json({message : "You are already a user."});
        }
        else if(user.verified === false){
            let generatedOTP = generateOTP();
            console.log(`generated otp from server : ${generatedOTP}`);
            await sendEmail(generatedOTP, email).catch(console.error);
            res.json({message : "You are not a member.", OTP : generatedOTP});
        }
    }
    else{
        let generatedOTP = generateOTP();
        await sendEmail(generatedOTP, email).catch(console.error);
        const createUser = await Users.create({
            email : email,
            country : country,
            firstname : '',
            lastname : '',
            password : '',
            pincode : '',
            address : '',
            dob : '',
            bag : [],
            favourite : [],
        });

        console.log("Email registered succesfully.");

        res.status(200).json({message : "Email registered succesfully.", OTP : generatedOTP})
    }
});

export default router;