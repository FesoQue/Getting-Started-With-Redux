import { createStore } from 'redux';

const initialState = {
  counter: 0,
};
const reducerFn = (state = initialState, action) => {
  switch (action.type) {
    case 'DEC':
      return { counter: state.counter - 1 };
      break;
    case 'RESET':
      return { counter: 0 };
      break;
    case 'INC':
      return { counter: state.counter + 1 };
      break;

    default:
      break;
  }
  return state;
};

export const store = createStore(reducerFn);
