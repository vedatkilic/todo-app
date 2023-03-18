import jwt from 'jsonwebtoken';

const secret = process.env.TOKEN_SECRET || 'secret'
const expiresIn = process.env.TOKEN_EXPIRES_IN || '1hr'

const sign = (data: any) => jwt.sign(data, secret,  { expiresIn })

const verify = (token: string): any | null => {
    try {
        return jwt.verify(token, secret);
    } catch (e) {
        return null;
    }
}



export default {
    sign,
    verify
}


