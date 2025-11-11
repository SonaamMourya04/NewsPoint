import React, { useState } from 'react'

const Toggle = () => {

    const[mode,setMode]=useState("black")
    const modeToggler=()=>{
         setMode((prevmode)=>(prevmode==="black"?"white":"black"))
    }
  return (
    <div className={`w-full h-screen 
    ${mode==="black"?"bg-black" :"bg-white"

    }`}>
        <button 
        className={` w-16 h-12
        ${
            mode==="black"
            ?"text-black bg-white border-2 "
            :"text-white bg-black"
        }`}
        onClick={modeToggler}>
        {mode==="black"?'light Mode':"dark mode"}
        </button>
    </div>
  )
}

export default Toggle;