import {Request, Response} from "express";

import userService from "./user.service";

const findAll = async (req: Request, res: Response) => {
    try {
        const users = await userService.findAll()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const findCurrentUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.findByUsername(res.locals.username)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const findById = async (req: Request, res: Response) => {
    try {
        const user = await userService.findById(Number(req.params.id))
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const save = async (req: Request, res: Response) => {
    try {
        const user = await userService.save({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const update = async (req: Request, res: Response) => {
    try {
        await userService.update(Number(req.params.id), {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteById = async (req: Request, res: Response) => {
    try {
        await userService.deleteById(Number(req.params.id))
        return res.status(204).send()
    } catch (error) {
        return res.status(500).json(error)
    }
}


export default {
    findAll,
    findCurrentUser,
    findById,
    save,
    update,
    deleteById
}
