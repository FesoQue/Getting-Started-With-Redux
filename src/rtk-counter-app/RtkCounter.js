import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, reset, increment } from './store/index';
import { actions } from './store/index';

const RtkCounter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    // dispatch(actions.decrement());
    dispatch(decrement());
  };

  const handleReset = () => {
    // dispatch(actions.reset(0));
    dispatch(reset(0));
  };

  const handleIncrement = () => {
    // dispatch(actions.increment());
    dispatch(increment());
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

export default RtkCounter;
