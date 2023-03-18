import userService from "../users/user.service";
import bcryptPassword from '../../utils/bcrypt-password.util'
import jwtUtil from '../../utils/jwt-token.util'

const authenticate = async (userToken: any) => {
    const model = await userService.findByUsername(userToken.username)
    const user = model?.dataValues
    if (!user) {
        throw new Error("User credentials are invalid")
    }
    const result = bcryptPassword.compare(userToken.password, user?.password)
    if (!result) {
        throw new Error("User credentials are invalid")
    }
    return { username: user?.username, token: jwtUtil.sign({username: user?.username }), isLoggedIn: true }
}

const signUp = async (signUpUser: any) => {
    const model = await userService.save(signUpUser)
    const user = model?.dataValues
    return { username: user?.username, token: jwtUtil.sign({username: user?.username }), isLoggedIn: true }
}

export default {
    authenticate,
    signUp
}

