import React, { Component } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles.js";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
