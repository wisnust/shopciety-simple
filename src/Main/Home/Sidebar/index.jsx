import React, { Component } from "react";
import "./index.css";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <h5>Categories</h5>
          <ul>
            <li>
              <a href="/">Phone</a>{" "}
            </li>
            <li>
              <a href="/">Electronics</a>{" "}
            </li>
            <li>
              <a href="/">Home &amp; Garden</a>{" "}
            </li>
            <li>
              <a href="/">Tools</a>{" "}
            </li>
            <li>
              <a href="/">Men's Clothing</a>{" "}
            </li>
            <li>
              <a href="/">Women's Clothing</a>{" "}
            </li>
            <li>
              <a href="/">Beauty &amp; Hair</a>{" "}
            </li>
            <li>
              <a href="/">Outdoors</a>{" "}
            </li>
            <li>
              <a href="/">Computers</a>{" "}
            </li>
            <li>
              <a href="/">Shoes &amp; Bags</a>{" "}
            </li>
            <li>
              <a href="/">Automobiles</a>{" "}
            </li>
            <li>
              <a href="/">Baby &amp; Kids</a>{" "}
            </li>
            <li>
              <a href="/">Security</a>{" "}
            </li>
            <li>
              <a href="/">Beauty</a>{" "}
            </li>
            <li>
              <a href="/">Jewelry</a>{" "}
            </li>
            <li>
              <a href="/">Watches</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
