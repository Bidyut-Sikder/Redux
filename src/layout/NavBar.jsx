import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (


    <div className="container">
      <nav className="navbar navbar-expand-md ">
        <a href="" className="navbar-brand">
          {/* <img src={myImg} alt="" /> */}
          <h1>Navbar</h1>
        </a>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collaps"
          data-bs-target="#btn"
        >
          click
        </button>

        <div className="collaps navbar-collapse sticky-top" id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/registration"} className="nav-link">
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
