import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispactch = useDispatch();

  const IncreaseHandler = () => {
    dispactch({ type: "ADD" });
  };

  const DecreaseHandler = () => {
    dispactch({ type: "DECREASE" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncreaseHandler}>Increment</button>
        <button onClick={DecreaseHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
