import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch({ type: 'DEC' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleIncrement = () => {
    dispatch({ type: 'INC' });
  };

  return (
    <div className='wrapper'>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <div className='btn-container'>
        <button className='btn' onClick={handleDecrement}>
          -
        </button>
        <button className='btn' onClick={handleReset}>
          reset
        </button>
        <button className='btn' onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
