import Todo from "./todos";

const findAll = async (options: any = null) => {
    return await Todo.findAll(options);
}

const findById = async (id: number) => {
    return await Todo.findByPk(id)
}

const save = async (todo: any) => {
    return await Todo.create(todo)
}

const update = async (id: number, todo: any) => {
    return await Todo.update(todo, { where: { id }, returning: true })
}

const deleteById = async (id: number) => {
    return await Todo.destroy({ where: { id } })
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById
}

