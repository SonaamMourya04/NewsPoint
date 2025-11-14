import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[username,setUserName]=useState('');
  const[email,setEmail]=useState('');
  const[passwoorrd,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');

  const[errorUserName,setErrorUserName]=useState('');
  const[errorEmail,setErrorEmail]=useState('');
  const[errorPassword,setErrrorPassword]=useState('');
  const[errorConfirmPassword,setErrorConfirmPassword]=useState('');


  const[userColor,setUserColor]=useState("");
  const[emailColor,setEmailColor]=useState("");
  const[passwordColor,setPasswordColor]=useState("");
  const[confirmPasswordColor,setConfirmPasswordColor]=useState("")
  return (
    <>
    <div className="card">
        <div className="card-image"></div>
        <form>
            <input type="text" 
            placeholder="Name" 
            value={username} 
            onChange={(e)=>setUserName(e.target.value)}
            />
            <p className="error">{errorUserName}</p>
        </form>

    </div>
    </>
  )
}

export default Form