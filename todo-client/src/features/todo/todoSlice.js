import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        loadTodos: (state, action) => {
            state.todos = [...action.payload]
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },
        updateTodo: (state, action) => {
            const newTodos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = action.payload.completed
                }

                return todo
            })
            state.todos = [...newTodos]
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.todos = [...newTodos]
        }
    }
})

export const { loadTodos, addTodo, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
