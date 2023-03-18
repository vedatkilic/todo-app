import React from "react";
import Logo from "../../assets/logo.svg";

const TodoHeader = () =>  <div className="flex flex-col items-start gap-3">
    <img src={Logo} className="h-8 w-8 text-indigo-500 stroke-current" />
    <h4 className="font-semibold text-lg">Todo List</h4>
</div>


export default TodoHeader;
