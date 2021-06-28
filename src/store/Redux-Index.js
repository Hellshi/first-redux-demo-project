import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const reducerCounter = (state = initialState, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
      showCounter: initialState.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: initialState.showCounter,
    };
  }

  if (action.type === "DECREASE") {
    return {
      counter: state.counter - 1,
      showCounter: initialState.showCounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      counter: initialState.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(reducerCounter);

export default store;
