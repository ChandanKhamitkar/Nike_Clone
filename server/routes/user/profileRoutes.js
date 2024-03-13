import express from "express";
import Users from "../../models/userModel.js";

const router = express.Router();

router.post("/profsdfile", async(req,res) => {
    const {userId} = req.body;
    if(!userId){
        res.status(401).json({message : 'Userid havent received'});
    }

    try {
        const user = await Users.findById(userId);
        const createdAtTimestamp = new Date(user.createdAt.$date);
        if(user){
            res.status(200).json({
                userId : user._id,
                email : user.email,
                firstname : user.firstname,
                lastname : user.lastname,
                coutry : user.country,
                pincode : user.pincode,
                address : user.address,
                month : createdAtTimestamp.getMonth(),
                year : createdAtTimestamp.getFullYear(),
            });

            console.log("profile details send successfully");
        }
        
    } catch (error) {
        console.log("Error : ", error);
    }
})

export default router;