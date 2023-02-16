import { useState } from "react";

const Contact = ({ name }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Contact Page</h1>

            <h2></h2>

            <h2>{name}</h2>
            <input type="text" />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
