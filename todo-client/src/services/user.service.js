import axios from "../utils/api";
export const fetchCurrentUser = () => axios.get("/api/users/me")
