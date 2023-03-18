import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ({todos, onDelete, onStatusChange}) => {
    return (
        <div className="flex flex-col gap-4">
            {todos.map((todo) => <TodoItem key={todo?.id} todo={todo} onStatusChange={onStatusChange} onDelete={onDelete} />)}
        </div>
    )
}

export default TodoList;
