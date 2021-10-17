import React, { Component } from "react";
import "./Header.css";
import Image from "../image/Image";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header-container">
        <div className="info">
          <h1>BAYARJARGAL BATBAYAR</h1>
          <h2>IT Engineer</h2>
          <h3>Student</h3>
          <h4>National University of Mongolia</h4>
        </div>
        <div className="img">
          <Image />
        </div>
      </div>
    );
  }
}
export default Header;
