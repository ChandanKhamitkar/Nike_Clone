import jwt from "jsonwebtoken";

const Authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
    
        if (!token) {
            return res.redirect("/login");
            // return res.status(401).json({ message: "Authentication failed: Token missing" });
        }
        token = token.split(" ")[1];
        console.log('TOKEN from auth...------ ', token);
        const data = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = data.userId;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: "Authentication failed: Invalid token" });
    }
};

export default Authentication ;

