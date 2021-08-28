import React from "react";
import { connect } from "react-redux";

// import { useAppDispatch, useAppSelector, RootState } from "hooks/redux.hook";
import { Button } from "themes/button";
const mapState = (state: any) => {
  return {
    state: state,
  };
};

function Cake(props: any) {
  //   const dispatch = useAppDispatch();
  //   const stateStore = useAppSelector((state) => state);
  const { dispatch, sayHi } = props;
  console.log("PROPS  RECEIVED", props);
  //   console.log(stateStore.value);
  sayHi();
  return (
    <div>
      <h1>Count the cake</h1>
      <Button onClick={() => dispatch({ type: "increment" })}>Increment</Button>
      {/* <p>Quantity : {stateStore.value}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button> */}
    </div>
  );
}
const sayHi = () => console.log("HEllo from Sayhi function");

const mapStateToProps = (state: any, x: any) => {
  console.log(x);
  return {
    value: state.value,
    hello: "how are you",
    hi: "XXXXX",
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatch,
  sayHi,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
