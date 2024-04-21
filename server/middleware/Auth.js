import jwt from "jsonwebtoken";

const Authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        // console.log("TOken from auth.js -> ", token);
    
        if (!token) {
            return res.redirect("/login");
        }
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = data.userId;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: "Authentication failed: Invalid token" });
    }
};

export default Authentication ;

