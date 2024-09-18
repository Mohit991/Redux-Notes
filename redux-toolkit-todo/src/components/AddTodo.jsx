import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    function addToDoHandler(e) {
        e.preventDefault();
        dispatch(addToDo(input));
        setInput("");
    }

    return (
        <div>
            <form onSubmit={addToDoHandler}>
                <input
                    type="text"
                    placeholder="enter a todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
