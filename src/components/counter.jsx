import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 2,
    mobil: ["Ferrari", "BMW", "Mini Cooper"]
  };
  styles = {
    fontSize: "20px"
  };

  renderMobil() {
    if (this.state.mobil.length === 0) return <p>There are no mobil</p>;

    return (
      <ul>
        {this.state.mobil.map(merk => (
          <li key={merk}> {merk} </li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 2 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button onClick={this.handleIncrement} className="btn btn-primary">
          button
        </button>
        {this.state.mobil.length === 0 && "please new mobil"}
        {this.renderMobil()}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "danger" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
