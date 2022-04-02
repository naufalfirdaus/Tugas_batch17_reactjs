import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GetCountriesRequest } from "../redux-saga/actions/CountriesAction";

export default function Countries() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countriesStated);

  useEffect(() => {
    dispatch(GetCountriesRequest());
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      <button onClick={() => history.push("countries/new")}>Add Countries</button>
      <button onClick={() => history.push("/")}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Country ID</th>
            <th>Country Name</th>
            <th>Region ID</th>
          </tr>
        </thead>
        <tbody>
          {countries &&
            countries.map((e) => {
              return (
                <tr>
                  <td>{e.country_id}</td>
                  <td>{e.country_name}</td>
                  <td>{e.region_id}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
