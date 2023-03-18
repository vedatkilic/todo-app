import { Router } from "express";
import usersHandlers from './users.handler';
import requireAuthentication from "../../middleware/authentication.middleware";

const userRoutes = Router();

userRoutes.get("/", usersHandlers.findAll)
    .get("/me", requireAuthentication,  usersHandlers.findCurrentUser)
    .get("/:id", usersHandlers.findById)
    .post("/", usersHandlers.save)
    .put("/:id", usersHandlers.update)
    .delete("/:id", usersHandlers.deleteById)

export default userRoutes;
