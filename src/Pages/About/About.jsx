import { useState } from "react";

const About = ({ name }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">About Page</h1>

            <h2>{name}</h2>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
