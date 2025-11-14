import React from 'react';
import {useState} from "react"

const Accordion = ({category,items}) => {
 const[isActive,setActive]=useState(false);

 
    return (
   <section className="accordion-card" key={Math.random()}>
    <div className="header" onClick={()=>setActive(!is)}>
        <div>{category}</div>
        <p className="icon">{isActive?"-":"+"}</p>

    </div>

   </section>
  )
}

export default Accordion;