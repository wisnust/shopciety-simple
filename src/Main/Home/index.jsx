import React, { Component } from "react";
import Sidebar from "./Sidebar/index";
import Slider from "./Slider/index";
import Category from "./Category/index";
import User from "./User/index";
import FlashDeals from "../../components/FlashDeals/index";
import { Container, Row, Col } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <Container>
          <Row>
            <Col md="2">
              <Sidebar />
            </Col>
            <Col md="8">
              <Slider />
              <Category />
            </Col>
            <Col md="2">
              <User />
            </Col>
          </Row>
        </Container>
        <FlashDeals />
      </div>
    );
  }
}

export default Home;
