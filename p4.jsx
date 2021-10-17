import React from "react";
import Header from "./components/header/Header";
import ReactDOM from "react-dom";
import ChosenComponent from "./components/chosenComponent/index";

ReactDOM.render(
  <div>
    <Header />
    <ChosenComponent />
  </div>,
  document.getElementById("reactapp")
);
