import React from "react";
import { Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <h2>Main Layout</h2>
      <ul>
        <li>
          <Link to="/region">Region</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/dependents">Dependents</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
    </div>
  );
}
