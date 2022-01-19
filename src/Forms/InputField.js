import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", essay: "", flavor:'coconut'};
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEssayChange(event) {
    this.setState({ essay: event.target.value });
  }

  handleFlavorChange(event) {
    this.setState({ flavor: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.name);
    console.log("A essay was submitted: " + this.state.essay);
    console.log("A flavor was submitted: " + this.state.flavor);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleNameChange(e)}
          />
        </label>
        <label>
            Essay:
            <textarea value={this.state.essay} onChange={(e) => this.handleEssayChange(e)} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.flavor} onChange={(e) =>this.handleFlavorChange(e)}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
