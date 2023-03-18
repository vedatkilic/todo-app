import todoRoutes from './api/todos'
import {Express} from "express";
import userRoutes from "./api/users";
import authRoutes from "./api/auth";

const routes = (app: Express): void => {
    app.use("/api/auth", authRoutes)
    app.use("/api/todos", todoRoutes)
    app.use("/api/users", userRoutes)
}

export default routes;
