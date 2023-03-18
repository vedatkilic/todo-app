import { Request, Response, NextFunction } from "express";
const requireAuthentication = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const username = res.locals.username;
    if (!username) {
        return res.status(403).json({
            "status": 401,
            "error": "AUTHENTICATION_REQUIRED",
            "message": "Authentication is required"
        })
    }
    return next();
};

export default requireAuthentication;
