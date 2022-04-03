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
          <Link to="/location">Locations</Link>
        </li>
        <li>
          <Link to="/department">Departments</Link>
        </li>
        <li>
          <Link to="/job">Jobs</Link>
        </li>
        <li>
          <Link to="/dependent">Dependents</Link>
        </li>
      </ul>
    </div>
  );
}
