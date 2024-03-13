import express from "express";
import Users from "../../models/userModel.js";
const router = express.Router();

router.post("/checkout", async(req, res) => {
    const userId = req.body.userId;

    try {
        const user = await Users.findById(userId);
        if(!user){
            console.log("User not found.");
            return res.status(400).json({message : "User not found."});
        }

        res.status(200).json({ bag: user.bag });
        
    } catch (error) {
        console.log("Error : ", error);
    }
})

export default router;