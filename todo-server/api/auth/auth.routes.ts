import { Router } from "express";
import authHandler from './auth.handler';

const authRoutes = Router();

authRoutes.post('/signin', authHandler.authenticate)
    .post("/signup", authHandler.signUp)

export default authRoutes;
