import {Request, Response} from "express";

import todoService from "./todo.service";

const findAll = async (req: Request, res: Response) => {
    try {
        const todos = await todoService.findAll({
            where: {
                username: res.locals.username
            }
        })
        return res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const findById = async (req: Request, res: Response) => {
    try {
        const todo = await todoService.findById(Number(req.params.id))
        return res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const save = async (req: Request, res: Response) => {
    try {
        const user = await todoService.save({
            username: res.locals.username,
            title: req.body.title
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const update = async (req: Request, res: Response) => {
    try {
        return todoService.update(Number(req.params.id), {
            completed: req.body.completed
        }).then(result => res.status(200).send())
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        return todoService.deleteById(Number(req.params.id))
            .then(_ => res.status(200).send());
    } catch (error) {
        return res.status(500).json(error)
    }
}


export default {
    findAll,
    findById,
    save,
    update,
    deleteById
}
