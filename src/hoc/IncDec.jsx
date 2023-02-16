import React, { Component } from "react";

const IncDec = (OriginalComponent, CounterVal = 1) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }
    handleIncr = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter + CounterVal,
      }));
    };

    handleDec = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter - CounterVal,
      }));
    };
    render() {
      return (
        <OriginalComponent
          counter={this.state.counter}
          handleIncr={this.handleIncr}
          handleDec={this.handleDec}
        />
      );
    }
  }

  return NewComponent;
};

export default IncDec;
