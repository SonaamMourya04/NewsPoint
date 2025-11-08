import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const Timer = () => {
  const [count, setCount] = useState(0);   // ✅ "const" not "cont"
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start timer
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>Timer: {count} seconds</h1>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default Timer;
