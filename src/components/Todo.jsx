
import { useState } from "react";


const Todo=()=>{
    const [todos,setTodos]=useState([]);
    const[ input,setInput]=useState("");
    const addTodo=()=>{
        if(input.trim==="")return
        setTodos([...todos,input]);
        setInput("");
    }
    return(
        <div>
            <input
            placeholder='enter the todo'
            type='text'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button type='submit' onClick={addTodo}> Add Todos</button>
            <ul>{todos.map(((todo ,index)=>(<li key={index}>
                {todo}
            </li>)))}</ul>
        </div>
    )
}
export default Todo;