import axios from "../utils/api";
export const fetchAll = () => axios.get('/api/todos')
export const save = (todo) => axios.post("/api/todos", todo)
export const update = (todo) => axios.put(`/api/todos/${todo.id}`, todo)
export const deleteById = (id) => axios.delete(`/api/todos/${id}`)
