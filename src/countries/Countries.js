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

  const onEdit = async (id) => {
    history.push(`countries/edit/${id}`);
  };

  // const onDelete = async (id) => {
  //   dispatch(DelRegionRequest(id));
  // };

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
                  <td>
                    <button onClick={() => onEdit(e.country_id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
