import express from "express";
import connectDb from "./config/dbConnection.js";
import dotevn from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import joinUsRoutes from "../server/routes/user/joinUsRoutes.js";
import signUpRoutes from "../server/routes/user/signUpRoutes.js";
import LoginRoutes from "../server/routes/user/loginRoutes.js";
import profileRoutes from "../server/routes/user/profileRoutes.js"
import addToBagRoutes from "../server/routes/bag/addToBagRoutes.js";
import addToFavouriteRoutes from "../server/routes/favourite/addToFavouriteRoutes.js";
import getBagSizeRoutes from "../server/routes/bag/getBagSizeRoutes.js";
import checkoutRoutes from "../server/routes/checkout/getCheckOutRoutes.js";
import favouriteRoutes from "../server/routes/favourite/getFavoriteRoutes.js";
import orderRoutes from "../server/routes/checkout/orderRoutes.js";



dotevn.config();
connectDb();
const app = express();
const port = 3010;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: 'https://nike-clone-frontend-two.vercel.app',
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));


app.get("/", (req,res)=>{
    res.status(200).json({message : "Welcome to Nike Clone"});
})
 
app.use("/api/user", joinUsRoutes);
app.use("/api/user", signUpRoutes);
app.use("/api/user", LoginRoutes);
app.use("/api/user", profileRoutes);
app.use("/api/user", addToBagRoutes);
app.use("/api/user", addToFavouriteRoutes);
app.use("/api/user", getBagSizeRoutes);
app.use("/api/user", checkoutRoutes);
app.use("/api/user", favouriteRoutes);
app.use("/api/user", orderRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});