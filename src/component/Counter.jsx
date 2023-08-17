import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div id="root">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
        <h1>{count}</h1>
        {showText && <p><h5>You clicked {count} times</h5></p>}
        <div className="d-flex gap-3">
          <button className="py-2 px-5 btn btn-outline-primary" onClick={increment}>+</button>
          <button className="py-2 px-5 btn btn-outline-danger" onClick={decrement}>-</button>
        </div>
        <button className="py-2 my-4 fw-bold px-5 btn btn-info" onClick={toggleText}>
          {showText ? 'Hide Text' : 'Show Text'}
        </button>
        
      </div>
    </div>
  );
};

export default Counter;
