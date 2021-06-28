import { createStore } from "redux";

const reducerCounter = (state = { counter: 0 }, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREASE") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(reducerCounter);

export default store;
