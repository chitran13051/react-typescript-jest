import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Cake from "./Components/Cake";
import { store } from "./redux/store";
function App(x: any) {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1> Hello Webstorm </h1>
        <header>
          <Cake />
        </header>
      </div>
    </Provider>
  );
}

export default App
