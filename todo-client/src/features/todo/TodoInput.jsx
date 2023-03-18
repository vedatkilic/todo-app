import React, {useState} from "react";

const TodoInput = ({onChange}) => {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onChange && onChange(value);
            setValue('');
        }
    };

    return (
        <input className="w-full flex-grow h-8 bg-transparent focus:outline-none border-b mt-5" type="text"
               placeholder="Add a new todo"
               value={value}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
        />
    )
}

export default TodoInput;
