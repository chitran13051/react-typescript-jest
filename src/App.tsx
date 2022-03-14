import { ReactElement } from "react";
import { useDispatch, useSelector, } from "react-redux";

import { RootState } from "hooks/redux.hook";

function App(): ReactElement {
  const counterValue = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  return (
    <>
      <h1>{counterValue.countReducer.value}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <h2>{counterValue.LogReducer.isLogged ? "Logged" : 'Logout'}</h2>
      <button onClick={() => dispatch({ type: counterValue.LogReducer.isLogged ? 'logOut' : 'logIn' })}>{counterValue.LogReducer.isLogged ? "Logged" : 'Logout'}</button>
    </>
  );
}

export default App;
