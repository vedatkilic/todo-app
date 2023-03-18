import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10)

const encode = (password: string): string => bcrypt.hashSync(password, salt)
const compare = (password: string, hash: string): boolean => bcrypt.compareSync(password, hash)

export default {
    encode,
    compare
}


