import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add(state) {
      state.counter++;
    },
    decrease(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticate: false,
};

const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logOut(state) {
      state.isAuthenticate = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: AuthSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const AuthAction = AuthSlice.actions;
export default store;
