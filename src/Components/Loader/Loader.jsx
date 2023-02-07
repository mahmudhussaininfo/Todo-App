import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loader, setLoader] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(loader);
  }, loader);
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="form-control w-50"
              type="text"
            />
            <h1>{loader}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <button
                  onClick={() => setLoader((prevState) => prevState + 1)}
                  className="btn btn-primary"
                >
                  +++
                </button>
                <button
                  onClick={() => setLoader((prevState) => prevState - 1)}
                  className="btn btn-danger"
                >
                  ---
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
