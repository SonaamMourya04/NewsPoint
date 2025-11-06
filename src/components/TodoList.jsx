import React from 'react';
import { useState } from 'react';

const TodoList = () => {
    const[Todo,setTodo]=useState([]);
    const[input,setInputs]=useState('');
    const  addTodo=(e)=>{
      e.preventDefault();
      if(input.trim==='') return;
      setTodo([...Todo,input]);
      setInputs("")
    }
  return (
    <div>
      <h2>Todo List</h2>
      <form  onSubmit={addTodo}>
        <input
        type="text"
        value={input}
        onChange={(evennt)=>{
          return(setInputs(evennt.target.value))
        }}
        placeholder="Add a new Todo"
        >
        </input>
        <button typr="submit">Add</button>
      </form>
      <ul>
        {Todo.map((Todo,index)=>
        (
          <li key={index}>{Todo}</li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList;