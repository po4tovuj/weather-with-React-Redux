import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import MainContainer from "./components/Main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
