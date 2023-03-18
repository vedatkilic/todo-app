import React, {useEffect, useState} from "react";
import TodoHeader from "./TodoHeader.jsx";
import TodoList from "./TodoList.jsx";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput.jsx";
import {addTodo, deleteTodo, loadTodos, updateTodo} from "./todoSlice";
import {fetchAll, save, update, deleteById} from "../../services/todo.service";

const TodoPage = () => {

    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState("all");

    useEffect(() => {
        fetchAll().then(response => dispatch(loadTodos(response.data)))
    }, []);

    useEffect(() => {
        filterHandler(todo.todos);
    }, [todo, status]);

    const filterHandler = (todos = []) => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed));
                break;
            case "incompleted":
                setFilteredTodos(todos.filter(todo => !todo.completed));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }

    const addTodoHandler = (title) => {
        const todo = { title };
        save(todo).then(response => dispatch(addTodo(response.data)))
    }

    const handleDelete = (todo) => {
        deleteById(todo.id).then(_ => dispatch(deleteTodo(todo)))
    }

    const handleStatusChange = (todo, completed) => {
        const updatedDo = {
                ...todo,
                completed
        }
        update(updatedDo).then(_ => dispatch(updateTodo(updatedDo)));
    }

    const renderTodos = (todos) => {
        if (todos && todos.length > 0) {
            return <div className="mt-5">
                <TodoList todos={todos} onDelete={handleDelete} onStatusChange={handleStatusChange} />
            </div>
        }
        return <></>
    }

    const renderFilter = (todos) => {
        if (todos && todos.length > 0) {
            return <div className="flex items-center gap-3 mt-5">
                <span className="font-medium text-gray-500">Show: </span>
                <button className={`${status === "all" ? "underline text-blue-500" : ""}`} onClick={() => setStatus("all") }>All</button>
                <button className={`${status === "completed" ? "underline text-blue-500" : ""}`} onClick={() => setStatus("completed") }>Completed</button>
                <button className={`${status === "incompleted" ? "underline text-blue-500" : ""}`} onClick={() => setStatus("incompleted") }>Incompleted</button>
            </div>
        }
        return <></>
    }

    return (
        <div className="flex flex-grow items-center justify-center h-full text-gray-600">
            <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
                <TodoHeader />
                <TodoInput onChange={addTodoHandler} />
                { renderTodos(filteredTodos) }
                { renderFilter(todo.todos) }
            </div>
        </div>
    )
}

export default TodoPage
