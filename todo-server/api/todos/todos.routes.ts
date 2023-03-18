import { Router } from "express";
import todosHandlers from './todos.handler';
import requireAuthentication from "../../middleware/authentication.middleware";

const todoRoutes = Router();

todoRoutes.get('/', requireAuthentication, todosHandlers.findAll)
    .get("/:id", requireAuthentication, todosHandlers.findById)
    .post("/", requireAuthentication, todosHandlers.save)
    .put("/:id", requireAuthentication, todosHandlers.update)
    .delete("/:id", requireAuthentication, todosHandlers.deleteById)

export default todoRoutes;
