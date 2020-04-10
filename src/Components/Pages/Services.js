import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ServicesRoute from "../Routes/ServicesRoute";

const Services = ({ match, history }) => {
  return (
    <div>
      <h1>Services</h1>
      <p>This is Services</p>

      <ul>
        <li>
          <NavLink to={`${match.url}/wedding`}>Wedding</NavLink>
          <br />
          <button
            onClick={() => {
              history.push(`${match.url}/wedding`);
            }}
          >
            Wedding
          </button>
        </li>
        <li>
          <NavLink to={`${match.url}/dj's`}>Dj's</NavLink>
          <br />
          <button
            onClick={() => {
              history.push(`${match.url}/dj's`);
            }}
          >
            Dj's
          </button>
        </li>
        <li>
          <NavLink to={`${match.url}/party`}>Party</NavLink>
          <br />
          <button
            onClick={() => {
              history.push(`${match.url}/party`);
            }}
          >
            Party
          </button>
        </li>
      </ul>

      <hr />

      <ServicesRoute match={match} />
    </div>
  );
};

export default withRouter(Services);
