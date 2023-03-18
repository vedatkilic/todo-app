import axios from "../utils/api";

export const sigIn = (credentials) => axios.post("/api/auth/signin", credentials)
export const signUp = (user) => axios.post("/api/auth/signup", user)
