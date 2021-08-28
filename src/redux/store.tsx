import { createStore } from "redux";


const counter = {
  value: 0,
  isLogged: false,
};

function countReducer(initialState: any = { ...counter }, action: any) {
  switch (action.type) {
    case "increment":
      return { value: initialState.value + 1 };

    case "decrement":
      if (initialState.value === 0) return { value: initialState.value };
      return { value: initialState.value - 1 };

    default:
      return initialState;
  }
}

export const store = createStore(countReducer);



