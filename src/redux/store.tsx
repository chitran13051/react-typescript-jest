import { createStore, combineReducers } from "redux";

interface ICounter {
  value: number,
  isLogged: boolean

}
export const counter: ICounter = {
  value: 0,
  isLogged: false,
};

function countReducer(initialState: ICounter = { ...counter }, action: any) {
  switch (action.type) {
    case "increment":
      return { ...initialState, value: initialState.value + 1 };

    case "decrement":
      if (initialState.value === 0) return { ...initialState, value: initialState.value };
      return { ...initialState, value: initialState.value - 1 };

    default:
      return initialState;
  }
}

const LogReducer = (initialState: ICounter = { ...counter }, action: any): ICounter => {

  switch (action.type) {
    case 'logIn':
      return { ...initialState, isLogged: true }
    case 'logOut':
      return { ...initialState, isLogged: false }

    default:
      return initialState
  }


}

const rootReducer = combineReducers({ countReducer, LogReducer })
export const store = createStore(rootReducer);
