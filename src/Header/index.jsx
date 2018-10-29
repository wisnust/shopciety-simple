import React, { Component } from "react";
import "./index.css";
import logo from "./logo.jpg";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = { isOpen: false, dropdownOpen: false, splitButtonOpen: false };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

  sectionStyle = {
    backgroundImage:
      'url(" //ae01.alicdn.com/kf/HTB1ag0bXzLuK1Rjy0Fh760pdFXaQ.png")'
  };

  render() {
    return (
      <div>
        {/* Top Banner */}
        <div className="top-banner" style={this.sectionStyle} />
        {/* Top Menu */}
        <div className="top-menu">
          <Container>
            <Row>
              <Col xs="6">
                {/* Header Socials */}
                <div className="header-socials">
                  <ul className="list-inline m-0">
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-pinterest" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/">
                        <i className="fab fa-snapchat" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs="6">
                <ul className="list-inline m-0 top-link">
                  <li className="list-inline-item">
                    <a href="/">
                      Ship To <i class="material-icons">expand_more</i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/">
                      Language <i class="material-icons">expand_more</i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Main Navbar */}
        <Navbar className="navbar-custom" color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={logo} width="180px" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="item-search">
                  <InputGroup className="search-nav">
                    <Input placeholder="I'm shopping for..." />
                    <InputGroupButtonDropdown
                      addonType="append"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggleDropDown}
                    >
                      <DropdownToggle caret>All Categories</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem>Option 3</DropdownItem>
                        <DropdownItem>Option 4</DropdownItem>
                        <DropdownItem>Option 5</DropdownItem>
                      </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <InputGroupAddon addonType="prepend">
                      <Button>
                        <i class="material-icons">search</i>
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </NavItem>
                <NavItem>
                  <NavLink className="cart-link" href="/">
                    <i class="material-icons">shopping_cart</i>

                    <span className="badge badge-danger">20</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    <i class="material-icons">favorite</i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">
                    <i className="material-icons">person</i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
