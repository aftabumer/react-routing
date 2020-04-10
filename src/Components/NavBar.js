import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavBar = ({ history }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="my-active" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" >About</NavLink>
          <br />
          <button
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </button>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default withRouter(NavBar);
