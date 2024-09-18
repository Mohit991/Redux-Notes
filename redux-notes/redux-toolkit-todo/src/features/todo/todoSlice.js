import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid generated unique ids which we will need for our todo app.

//initialState defines the initlial state of the state
const initialState = {
    todos: [{ id: 1, text: "First todo" }], //todos is the name of the state
};

export const todoSlice = createSlice({
    name: "todo", //name of the slice
    initialState, //initlial value of the state
    //reducers are the methods which will modify the state
    reducers: {
        //In each reducers, you will get two things:
        //1. state: gives access to your state, here it is todos
        //todos is an array of object. Each object is a todo.
        //2. action: When reducers are called, we will get some info, this info we will get from aciton.
        //Here when addToDo will be called, we will get the todo ie text of the todo
        //that text we will be able to access via action.
        //action.payload will have the data sent to the reducer.
        //action.payload is an object in this case.
        addToDo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            };
            //access state with state.stateName
            state.todos.push(newTodo);
        },

        removeToDo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => action.payload !== todo.id
            );
        },
    },
});

//exporting individual functionalities
export const {addToDo, removeToDo} = todoSlice.actions

//exporting todoSlice.reducer so we can register it in the store
export default todoSlice.reducer