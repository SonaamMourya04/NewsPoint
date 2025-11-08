import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';

// Define initial state
const initialState = { name: '', email: '' };

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'setname':
      return { ...state, name: action.payload };
    case 'setemail':
      return { ...state, email: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// Component
const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <input
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: 'setname', payload: e.target.value })}
      />
      <input
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: 'setemail', payload: e.target.value })}
      />
      <button onClick={() => dispatch({ type: 'reset' })}>Clear</button>

      <p>
        Name: {state.name} <br />
        Email: {state.email}
      </p>
    </div>
  );
};

export default Form;
