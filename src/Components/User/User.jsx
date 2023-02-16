import React from "react";

const User = ({ name }) => {
  return (
    <>
      <h1>{name(true)}</h1>
    </>
  );
};

export default User;
