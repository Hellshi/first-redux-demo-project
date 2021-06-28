import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispactch = useDispatch();

  const IncreaseHandler = () => {
    dispactch({ type: "ADD" });
  };

  const IncreaseByFive = () => {
    dispactch({ type: "increase", amount: 5 });
  };

  const DecreaseHandler = () => {
    dispactch({ type: "DECREASE" });
  };

  const toggleCounterHandler = () => {
    dispactch({ type: "TOGGLE" });
    console.log(showCounter);
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
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
