import { Request, Response, NextFunction } from "express";
import jwtUtil from "../utils/jwt-token.util";
const bearerTokenFilter = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const accessToken = (req.headers.authorization || "").replace(
        /^Bearer\s/,
        ""
    );

    if (!accessToken) {
        return next();
    }

    try {
        const decoded = jwtUtil.verify(accessToken);
        if (decoded) {
            res.locals.username = decoded.username;
        }
        return next();
    } catch (e) {
        return res.status(401).json({
            "status": 401,
            "error": "AUTHENTICATION_REQUIRED",
            "message": "Authentication is required"
        })
    }
};

export default bearerTokenFilter;
