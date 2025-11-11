import React, {useState}from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
  return (
    <div className="bg-black w-screen h-screen">
        <h1 className="text-white">
            {count}
        </h1>
        <div>
            <button 
            className="rounded-full text-white bg-black w-12 h-12 items-centre justify-centre hover:border-2 boder white shadow-[0_0_10px_white] m-10"
             onClick={increment}>
                +
            </button>
            <button 
            className="rounded-full text-white bg-black w-12 h-12 items-center justify-centre shadow-[0_0_10px_white] m-10"
            onClick={decrement}
            >
                -
            </button>
        </div>

    </div>
  )
}

export default Counter