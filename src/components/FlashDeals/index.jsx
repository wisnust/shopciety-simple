import React, { Component } from "react";
import "./index.css";
import { Container, Row, Col } from "reactstrap";

class FlashDeals extends Component {
  render() {
    return (
      <div className="product-section bg-light">
        <Container>
          <div className="section-header">
            <h2>Flash Deals</h2>
            <p>Hot items. Affordable prices.</p>
            <div className="cta">
              <a href="/">
                View More <i className="fas fa-chevron-right" />{" "}
              </a>
            </div>
          </div>
          <div className="product-item">
            <div className="card">
              <a href="/">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af753f6c66c27ee4325322951a0f2f6e&auto=format&fit=crop&w=1650&q=80" />
                <div className="content">
                  <h5>DEUTER Indoor Exercise Home Training 6 Speed Magnetic</h5>
                  <p className="price">$75.99</p>
                  <p className="price-discount">$100.99</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="/">
                <img src="https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a11da19e81415e5a81029aade9df7774&auto=format&fit=crop&w=800&q=60" />
                <div className="content">
                  <h5>
                    Original bobovr Z5/bobo vr Z5 Virtual Reality goggles 120
                    FOV 3D{" "}
                  </h5>
                  <p className="price">$75.99</p>
                  <p className="price-discount">$100.99</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="/">
                <img src="https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92a1714119e42bc9d947f75ec4733ed6&auto=format&fit=crop&w=800&q=60" />
                <div className="content">
                  <h5>Visual Reverse Radar System 8 Parking Sensor Car</h5>
                  <p className="price">$75.99</p>
                  <p className="price-discount">$100.99</p>
                </div>
              </a>
            </div>
            <div className="card">
              <a href="/">
                <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5123b60869dee1acceac3720eee527b4&auto=format&fit=crop&w=800&q=60" />
                <div className="content">
                  <h5>
                    VXSCAN Car Battery Tester/Analyzer MICRO-200 MICRO 200
                  </h5>
                  <p className="price">$75.99</p>
                  <p className="price-discount">$100.99</p>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default FlashDeals;
