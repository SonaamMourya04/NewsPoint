import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";
const CounterEffect=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
console.log("basic tge effect");
    },[count])
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>
                increment
            </button>

        </div>
    )
}
export default CounterEffect;