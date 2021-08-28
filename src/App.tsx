import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import helloWorld from "Components/test";
import Cake from "./Components/Cake";
import helloWorld from "Components/test";
import { Provider } from "react-redux";
import { store } from "./redux/store";
helloWorld();
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

export default App;
