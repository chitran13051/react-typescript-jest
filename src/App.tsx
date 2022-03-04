import GoogleAd from "Components/GoogleAd";
import React, { ReactElement, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { myTheme } from "themes";
import { DFPSlotsProvider, AdSlot } from "react-dfp";
import { MessageProvider, Message } from '@messageformat/react'
import "./App.css";
import Cake from "./Components/Counter/Counter";

// import { Auto } from "./Shared/Auto";
import Counter from "./Components/Counter/Counter";
import { Square } from "Components/Square/Square";
import Form from "./Components/Form/Form";
import StickyButton from "Components/StickyButton/StickyButton";
import messages from '../src/message.de.json'
function App(): ReactElement {
  // const audi = new Auto("audi a4", 1950);
  // const bwm = new Auto("bwm", 1620);
  // console.log(audi.start());
  // console.log(Auto.name);
  // audi.start();
  // Auto.prototype.start();
  // Auto.start();
  return (

    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <div className='App'>
          <p>Hello</p>
          {/* <StickyButton /> */}
          {/* <GoogleAd /> */}
          {/* <Counter /> */}
          {/* <Square /> */}
          {/* <Form /> */}
          <MessageProvider messages={messages}>
            <Message id='header.name' age='8' />
          </MessageProvider>
        </div>
      </Provider>
    </ThemeProvider>

  );
}

export default App;
