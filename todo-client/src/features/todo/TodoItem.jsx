import React from "react";

import CloseIcon from '../../assets/delete.svg'
const TodoItem = ({ todo, onStatusChange, onDelete  }) => {

    const handleStatusChange = (event) => {
        onStatusChange && onStatusChange(todo, event.target.checked)
    }

    const handleDelete = () => {
        onDelete && onDelete(todo);
    }

    return (
        <div className="flex items-center">
            <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox"
                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                       onChange={handleStatusChange}
                       checked={todo.completed}
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor="terms">{ todo?.title }</label>
            </div>
            <button className="ml-auto">
                <img src={CloseIcon} className="w-3 h-3 text-gray-300" alt="" onClick={handleDelete}/>
            </button>
        </div>
    )
}

export default TodoItem;
