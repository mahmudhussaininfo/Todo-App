import { Component, PureComponent } from "react";
import IncDec from "../../hoc/IncDec";

class Counter extends PureComponent {
  render() {
    const { counter, handleIncr, handleDec } = this.props;
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body text-center">
                <h1 style={{ fontSize: "200px" }}>{counter}</h1>
                <hr />
                <button
                  onClick={handleIncr}
                  className="btn btn-primary
                "
                >
                  +++
                </button>
                &nbsp;
                <button onClick={handleDec} className="btn btn-danger">
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

export default IncDec(Counter, 50);
