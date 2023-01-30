import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  return (
    <div >
      <h1>{count}</h1>
      <button onClick={incr} className={classes.button}>+</button>
    </div>
  );
};
