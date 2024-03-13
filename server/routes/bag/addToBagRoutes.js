import express from "express";
import Users from "../../models/userModel.js";

const router = express.Router();

router.post("/addToBag", async(req, res) => {
    const userId = req.body.userId;
    const {imgLink, name, type, userSize, price} = req.body;

    try {
        const user = await Users.findById(userId);
        if(!user){
            console.log("User not found.");
            return res.status(400).json({message : "User not found."});   
        }
        user.bag.push({imgLink, name, type, userSize, price});
        await user.save();
        res.status(201).json({message : "Item added to bag to successfully."});
    } catch (error) {
        console.log("error : ", error);
    }
});

export default router;