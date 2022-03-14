import { ReactElement } from "react";
import { useDispatch, useSelector, } from "react-redux";

import { RootState } from "hooks/redux.hook";
import { decrement, increment, incrementByAmount } from "redux/counterRTKSlice";
import { logIn, logOut } from "redux/userRTKSlice";

function App(): ReactElement {
  const state = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  console.log(state)
  return (
    <>
      <h1>Hello</h1>
      <h1>{state.counter.value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Decrement</button>

      <h1>{state.user.isLogged ? 'LogIn' : 'LogOut'}</h1>

      <button onClick={() => { dispatch(state.user.isLogged ? logOut() : logIn()) }}>SignIn/SignOut</button>
    </>
  );
}

export default App;
