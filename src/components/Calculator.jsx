import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(''); // start empty

  const display=(value)=>setInputValue(inputValue + value);

  const clear=()=>setInputValue("");

//eval js method to evaluate value
const calculates=()=>setInputValue(eval(inputValue))
const handleSubmit=(e)=>e.preventDefault();

  return (
    <form name="calc" onSubmit={handleSubmit}>
      <input
      type="text"value={inputValue}
      onChange={(e)=>setInputValue(e.target.value)}
      />
      <span onClick={()=>clear()}>c</span>
      <span onClick={()=>display('/')}>/</span>
      <span onClick={()=>display('*')}>*</span>
      <span onClick={()=>display('7')}>7</span>
      <span onClick={()=>display('8')}>8</span>
      <span onClick={()=>display('9')}>9</span>
      <span onClick={()=>display('-')}>-</span>
      <span onClick={()=>display('4')}>4</span>
      <span onClick={()=>display('5')}>5</span>
      <span onClick={()=>display('6')}>6</span>
      <span onClick={()=>display('+')}>+</span>
      <span onClick={()=>display('1')}>1</span>
      <span onClick={()=>display('2')}>2</span>
      <span  onClick={()=>display('3')}>3</span>
      <span onClick={()=>display('0')}>0</span>
      <span onClick={()=>display('00')}>00</span>
       <span onClick={()=>display('.')}>.</span>
        <span onClick={calculates}>=</span>
     
    </form>
  );
};

export default Calculator;
