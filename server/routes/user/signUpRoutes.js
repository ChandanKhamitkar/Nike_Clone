import express from "express";
import Users from "../../models/userModel.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/signUp", async(req, res) => {
    const {email, firstname, lastname, password, dob, verified, pincode, address} = req.body;
    if(!email || !firstname || !lastname || !password || !dob || !pincode || !address){
        res.status(400).json({ error: "All fields are mandatory." });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Users.findOne({email : email});
    if(user){
        user.firstname = firstname;
        user.lastname = lastname;
        user.password = hashedPassword;
        user.pincode = pincode;
        user.address = address;
        user.dob = dob;
        user.verified = verified;
        await user.save();


        console.log("Successfully Registered.");
        res.status(200).json({message : "Successfully Registered."});
    }
});

export default router;