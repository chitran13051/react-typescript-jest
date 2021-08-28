import React from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { myTheme } from "themes";
import "./App.css";
import Cake from "./Components/Counter";

function App(x: any) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={myTheme}>
        <div className='App'>
          <h1>Hello World </h1>
          <header>
            <Cake />
          </header>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
