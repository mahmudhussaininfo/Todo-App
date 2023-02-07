import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: "",
    };
  }
  handleIncr = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  handleDec = () => {
    this.setState((prevState) => ({
      ...prevState,
      counter: prevState.counter - 1,
    }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body text-center">
                <h1 style={{ fontSize: "200px" }}>{counter}</h1>
                <hr />
                <button
                  onClick={this.handleIncr}
                  className="btn btn-primary
                "
                >
                  +++
                </button>
                &nbsp;
                <button onClick={this.handleDec} className="btn btn-danger">
                  ---
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
