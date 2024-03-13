import express from "express";
import Users from "../../models/userModel.js";

const router = express.Router();

router.post("/getBagItemsSize", async(req,res) => {
    const userId = req.body.userId;

    try {
        const user = await Users.findById(userId);
        if(user){
            // console.log("Bag size sent successfully.");
            return res.status(200).json({bagSize : user.bag.length});
        }
        
    } catch (error) {
        console.log("Error : ", error);
    }

});

export default router;