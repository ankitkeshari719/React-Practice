import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  handleClimeMe() {
    console.log("this is:", this);
  }

  deleteRow(id) {
    console.log("Id:", id);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={() => this.handleClimeMe()}>Click me</button>
        <button onClick={(e) => this.deleteRow(1, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, 1)}>Delete Row</button>
      </>
    );
  }
}

export default Toggle;
