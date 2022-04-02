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
          <Link to="/countries">countries</Link>
        </li>
      </ul>
    </div>
  );
}
