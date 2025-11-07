import React from 'react'
import {useState,useEffect} from 'react'
import reactDom from'react-dom/client'
const BasicEffect=()=>{
    useEffect(()=>{
        console.log("useEffect called");
    },[])
    return(
        <div>
<h2>Basic useEffect</h2>
        </div>
    )
};
export default BasicEffect;