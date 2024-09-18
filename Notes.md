# Redux-Toolkit
It is a state management library. They allow us to have global states. The global states can be access (read and write) from any component. Redux-toolkit is the better version of redux.  

<img width="339" alt="{CC89D00F-1DF0-4826-8815-2B355522D748}" src="https://github.com/user-attachments/assets/780c2d59-d3d1-4d4c-8ece-88176ddb7ed7">  

**Store**: Single source of truth. Store will provide you everything. 
**Reducers**: They will help to control the global states.  
**useSelector**: They are used to read the value from store.  
**useDispatch**: They are used to write values to the store.  

## Installation 
`npm install @reduxjs/toolkit`  
For react binding:  
`npm install react-redux`  

## Creating Store
### Folder structure 
<img width="128" alt="{9161363B-D200-45C3-951E-FD38059BE9AA}" src="https://github.com/user-attachments/assets/192e13fb-7f2e-4184-a821-0b84202480ee">  

We have a folder called app inside src. Inside the folder we have a file called store.js  
![image](https://github.com/user-attachments/assets/ada57968-b293-4f6f-bf4b-bd49eee2fded)  

It looks like this at the moment, but we will be adding details to the object we are passing to configureStore. 

## Creating Slices
### Folder Structure
<img width="184" alt="{32082996-1ECB-42A5-AF72-188FDB967378}" src="https://github.com/user-attachments/assets/f418ec0c-4702-40a8-9acd-01aa56c31166">
 

Create a folder called features inside the src folder. Features folder can have many slices. Each slice works with a feature in our app.  
We have todo folder inside the features folder. Todo is a feature. Inside the todo folder, we create a file called todoSlice.js  
### todoSlice.js
![image](https://github.com/user-attachments/assets/ecf23105-1116-4b27-8007-77eb32119c0c)  
 

Now we need to import and register the reducer ie todoReducer in the store.js 
### store.js
![image](https://github.com/user-attachments/assets/059f6e0a-b292-4b29-b8ec-99bc69e449b1)  

After this global states are created. Now, all we need to do is to get the state value in our components and update them if needed.  
## Using Global States in out Components
### Creating component
Folder structure:  
<img width="183" alt="{FF5F8E9E-6A3D-4C5C-8231-533C76C143B1}" src="https://github.com/user-attachments/assets/7be8c921-53fb-40f7-aa6c-b5ab28380cc6">  

### Using global state 
**Below part shows how to use reducers (write/modify the state) **

First import useDispatch:
`import {useDispatch} from 'react-redux'`  
Get dispatch from useDispatch():
`const dispatch = useDispatch()`  
Import the reducer from slice:  
`import { addToDo } from "../features/todo/todoSlice";`  
Use dispatch and call the reducer with the payload:  
`dispatch(addToDo(input))`  
See the addToDo.jsx file:  
![image](https://github.com/user-attachments/assets/a289cfd2-d974-4440-bc6b-31b3d6b87481)  

**Below part shows how to read the state **  
Import useSelector  
`import { UseSelector } from 'react-redux'`  
Get the state using the useSelector:  
`const todos = useSelector(state.todo)`  
You can now render this list using map.  
Here is the Todo.jsx:  
![image](https://github.com/user-attachments/assets/0d046c7c-8acd-434e-9434-4035cf67229a)  

## Providing Context
To do so, we just go to index.js or main.jsx. We just need to wrap all the components withing provider.  
Import store and provider in main.jsx:  
`import { Provider } from 'react-redux'`  
`import {store} from './app/store.js'`  
Here is the main.jsx:  
![image](https://github.com/user-attachments/assets/2114b9dc-864c-44b5-b9ff-0903c79b695b)  
This is all you need with redux. 




















