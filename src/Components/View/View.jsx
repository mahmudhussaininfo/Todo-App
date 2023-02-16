import React, { Component } from "react";
import IncDec from "../../hoc/IncDec";
import "./View.scss";

class View extends Component {
  render() {
    const { counter, handleIncr } = this.props;
    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body text-center">
                  <div onMouseLeave={handleIncr} className="video">
                    <span>{counter} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IncDec(View, 5);
