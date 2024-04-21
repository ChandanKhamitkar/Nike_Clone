import express from "express";
import Users from "../../models/userModel.js";
const router = express.Router();

 router.post("/order", async (req, res) => {
    const userId = req.user;

    const user = await Users.findByIdAndUpdate(userId, {$set : {bag : []}}, {new :  true})
    .then(updatedUser => {
        console.log("Order Placed Successfully.");
        res.status(200).json({message : "Order Placed Successfully."});
    })
    .catch(err => {
        console.log("Error in placing order.");
    })
})

export default router;
