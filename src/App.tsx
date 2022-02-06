import GoogleAd from "Components/GoogleAd";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { myTheme } from "themes";
import { DFPSlotsProvider, AdSlot } from "react-dfp";
import "./App.css";
import Cake from "./Components/Counter";

import { Auto } from "./Shared/Auto";
import Counter from "./Components/Counter";
import { Square } from "Components/Square";

function App(): ReactElement {
  const audi = new Auto("audi a4", 1950);
  const bwm = new Auto("bwm", 1620);

  // console.log(audi.start());
  // console.log(Auto.name);
  // audi.start();
  // Auto.prototype.start();
  Auto.start();
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>
          <div className='App'>
            <p>Hello</p>
            {/* <GoogleAd /> */}
            {/* <Counter /> */}
            <Square />
          </div>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
