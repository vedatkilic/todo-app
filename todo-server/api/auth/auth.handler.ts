import {Request, Response} from "express";

import authService from "./auth.service";


const authenticate = async (req: Request, res: Response) => {
    try {
        const authenticationToken = await authService.authenticate({ username: req.body.username, password: req.body.password })
        return res.status(200).json(authenticationToken)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const signUp = async (req: Request, res: Response) => {
    try {
        const user = await authService.signUp({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export default {
    authenticate,
    signUp
}
