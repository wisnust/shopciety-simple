import React, { Component } from "react";
import "./index.css";
import { Button } from "reactstrap";

class User extends Component {
  render() {
    return (
      <div>
        <div className="user-main">
          <img
            src="http://beautycraftkitchens.com/wp-content/uploads/2017/02/dummy_user.png"
            className="img-fluid"
          />

          <h3>
            Welcome to <b>Shopciety</b>
          </h3>
          <div className="cta">
            <Button color="primary">Join</Button>{" "}
            <Button outline color="primary">
              Sign In
            </Button>{" "}
          </div>
        </div>
        <div className="banner-right">
          <img src="https://via.placeholder.com/198x320?text=banner-ads" />
        </div>
      </div>
    );
  }
}

export default User;
