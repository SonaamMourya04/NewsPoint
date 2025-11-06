import React from 'react';
import {useState} from 'react'

const Counter = () => {
const[count,setCount]=useState(0);

const updatedValue=(prevCount)=>{
    setCount((prevCount)=>{
return prevCount+1;
    })
}
  return (
    <div>
        <h1> CurrentValue:{count}</h1>
        <button  onClick={updatedValue}>Increment</button>
       </div>
  )
}

export default Counter;