import express from "express";
import connectDb from "./config/dbConnection.js";
import dotevn from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Authentication from "./middleware/Auth.js";
import joinUsRoutes from "./routes/user/joinUsRoutes.js";
import signUpRoutes from "./routes/user/signUpRoutes.js";
import LoginRoutes from "./routes/user/loginRoutes.js";
import profileRoutes from "./routes/user/profileRoutes.js";
import addToBagRoutes from "./routes/bag/addToBagRoutes.js";
import addToFavouriteRoutes from "./routes/favourite/addToFavouriteRoutes.js";
import getBagSizeRoutes from "./routes/bag/getBagSizeRoutes.js";
import checkoutRoutes from "./routes/checkout/getCheckOutRoutes.js";
import favouriteRoutes from "./routes/favourite/getFavoriteRoutes.js";
import orderRoutes from "./routes/checkout/orderRoutes.js";

dotevn.config();
connectDb();
const app = express();
const port = 3010;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: `${process.env.REACT_APP_BASE_URL}`,
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}));
// app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Nike Clone" });
});

app.use("/api/user", joinUsRoutes);
app.use("/api/user", signUpRoutes);
app.use("/api/user", LoginRoutes);
app.use("/api/user", profileRoutes);
app.use("/api/user", addToBagRoutes);
app.use("/api/user", addToFavouriteRoutes);
app.use("/api/user", getBagSizeRoutes);
app.use("/api/user", Authentication, checkoutRoutes);
app.use("/api/user", Authentication, favouriteRoutes);
app.use("/api/user", Authentication, orderRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
