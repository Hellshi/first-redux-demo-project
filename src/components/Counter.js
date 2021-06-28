import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/Redux-Index";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispactch = useDispatch();

  const IncreaseHandler = () => {
    dispactch(counterActions.add());
  };

  const IncreaseByFive = () => {
    dispactch(counterActions.increase(5));
  };

  const DecreaseHandler = () => {
    dispactch(counterActions.decrease());
  };

  const toggleCounterHandler = () => {
    dispactch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={IncreaseHandler}>Increment</button>
        <button onClick={IncreaseByFive}>Increase by 5</button>
        <button onClick={DecreaseHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
