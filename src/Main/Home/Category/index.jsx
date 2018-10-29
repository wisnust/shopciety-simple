import React, { Component } from "react";
import "./index.css";

class Category extends Component {
  styledItemSports = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af753f6c66c27ee4325322951a0f2f6e&auto=format&fit=crop&w=1650&q=80')"
  };
  styledItemTech = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a11da19e81415e5a81029aade9df7774&auto=format&fit=crop&w=800&q=60')"
  };
  styledItemVehicles = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92a1714119e42bc9d947f75ec4733ed6&auto=format&fit=crop&w=800&q=60')"
  };
  styledItemKids = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5123b60869dee1acceac3720eee527b4&auto=format&fit=crop&w=800&q=60')"
  };
  styledItemFashion = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1457972703743-4a6585c42ed8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=88f83e98e2cb51dfcf90091a833d61b5&auto=format&fit=crop&w=800&q=60')"
  };
  styledItemWatches = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1518520247810-9d56f8bc5556?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbd644bcbe6dadf49bf39c18753a651f&auto=format&fit=crop&w=800&q=60')"
  };
  render() {
    return (
      <div>
        <div className="main-category">
          <div className="item">
            <a href="/">
              <h4>Sports</h4>
              <div className="bg-item" style={this.styledItemSports} />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <h4>Tech</h4>
              <div className="bg-item" style={this.styledItemTech} />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <h4>Vehicles</h4>
              <div className="bg-item" style={this.styledItemVehicles} />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <h4>Kids</h4>
              <div className="bg-item" style={this.styledItemKids} />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <h4>Fashion</h4>
              <div className="bg-item" style={this.styledItemFashion} />
            </a>
          </div>
          <div className="item">
            <a href="/">
              <h4>Watches</h4>
              <div className="bg-item" style={this.styledItemWatches} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
