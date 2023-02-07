import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <a href="#">
                  <img
                    src="https://codemanbd.com/wp-content/uploads/2022/04/Codemanbd-logo-png-file-2048x369.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/form">Teams</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
