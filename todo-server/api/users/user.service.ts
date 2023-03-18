import User from "./users";
import bcryptPassword from '../../utils/bcrypt-password.util'

const findAll = async () => {
    return await User.findAll();
}

const findById = async (id: number) => {
    return await User.findByPk(id)
}

const findByUsername = async (username: string) => {
    return await User.findOne({ where: { username: username } })
}

const save = async (user: any) => {
    return await User.create( {
        ...user,
        password: bcryptPassword.encode(user.password)
    })
}

const update = async (id: number, user: any) => {
    return await User.update({
        ...user,
        password: bcryptPassword.encode(user.password)
    }, { where: { id } })
}

const deleteById = async (id: number) => {
    return await User.destroy({ where: { id } })
}

export default {
    findAll,
    findById,
    save,
    update,
    deleteById,
    findByUsername
}

