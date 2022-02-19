import React, { useState } from "react";
import { connect } from "react-redux";

import { useAppDispatch, useAppSelector, RootState } from "hooks/redux.hook";
import { Button } from "themes";
import { store } from "../../redux/store";
export function Counter() {
  // const dispatch = useAppDispatch();
  // const stateStore = useAppSelector((state) => state);

  const [count, setCount] = useState(0);

  return (
    <div id='counter' data-testid='counter'>
      <h1>Count the number</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <p className='result'>Quantity : {count}</p>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
    </div>
  );
}

export default Counter;
