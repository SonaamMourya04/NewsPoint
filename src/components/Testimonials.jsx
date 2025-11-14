import React from 'react';
import {useState} from 'react'

const Testimonials = () => {
    const[currentIndex,setCurrentIndex]=useState(0);
    const testimonials=[
      {
        quote:"this  is the best product I've ever used",
        author:"jane Doe"
      },
      {
        quote:"i highly recommend this product to everyone",
        author:"John Smith"
      },{
        quote:"this product has completely changed my life!",
        author:"Sonam Mourya"
      }
    ]

    const handlePrev=()=>{
      setCurrentIndex((currentIndex+testimonials.length-1)%testimonials.length)
    }
    const handleNext=()=>{
      setCurrentIndex((currentIndex+1)%testimonials.length)
    }
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {
          testimonials[currentIndex].quote
        }

      </div>
      <div className="testimonials-author">
        -{testimonials[currentIndex].author}
        </div>
< div className="testimonials-nav">
<button onClick={handlePrev}> Prev</button>
<button onClick={handleNext}>Next</button>
</div>


    </div>
  )
}

export default Testimonials