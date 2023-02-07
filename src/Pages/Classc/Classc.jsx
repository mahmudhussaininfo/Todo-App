import React, { Component } from "react";

export class Classc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      bgColor: "green",
    };
  }
  render() {
    const { counter, bgColor } = this.state;

    //for Counter
    const handleCounter1 = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: 10 <= counter ? 10 : counter + 1,
      }));
    };
    const handleCounter2 = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: 0 >= counter ? 0 : counter - 1,
      }));
    };

    //for bg Color
    const handleColor = (color) => {
      this.setState((prevState) => ({
        ...prevState,
        bgColor: color,
      }));
    };
    return (
      <>
        <div className="box" style={{ backgroundColor: bgColor }}>
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <h1>Class Components</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <h1>{counter}</h1>
                    <button
                      onClick={() => handleCounter1()}
                      className="btn btn-primary"
                    >
                      +++
                    </button>
                    &nbsp;
                    <button
                      onClick={() => handleCounter2()}
                      className="btn btn-danger"
                    >
                      ---
                    </button>
                    &nbsp;
                  </div>
                </div>
                <button
                  onClick={() => handleColor("red")}
                  className="btn btn-danger"
                >
                  red
                </button>
                &nbsp;
                <button
                  onClick={() => handleColor("yellow")}
                  className="btn btn-warning"
                >
                  Yellow
                </button>{" "}
                &nbsp;
                <button
                  onClick={() => handleColor("green")}
                  className="btn btn-dark"
                >
                  green
                </button>
              </div>
            </div>
          </div>
          <hr />
          <hr />
          <hr />
        </div>
      </>
    );
  }
}

export default Classc;
