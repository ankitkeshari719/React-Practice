import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {

  handleChange(e){
      console.log("Here First ::",e.target.value);
      this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input type="number" value={temperature} onChange={(e) => this.handleChange(e)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
