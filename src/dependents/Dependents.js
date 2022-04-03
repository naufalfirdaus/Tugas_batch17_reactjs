import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DelDependentsRequest, GetDependentsRequest } from "../redux-saga/actions/DependentsAction";

export default function Dependents() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { dependents } = useSelector((state) => state.dependentsStated);

  useEffect(() => {
    dispatch(GetDependentsRequest());
  }, []);

  const onEdit = async (id) => {
    history.push(`dependents/edit/${id}`);
  };

  const onDelete = async (id) => {
    dispatch(DelDependentsRequest(id));
  };

  return (
    <div>
      <h2>List of Dependents</h2>
      <button onClick={() => history.push("dependents/new")}>Add Departments</button>
      <button onClick={() => history.push("/")}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Dependent ID</th>
            <th>Dependent Name</th>
            <th>Location ID</th>
          </tr>
        </thead>
        <tbody>
          {dependents &&
            dependents.map((e) => {
              return (
                <tr>
                  <td>{e.dependent_id}</td>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.relationship}</td>
                  <td>{e.employee_id}</td>
                  <button onClick={() => onEdit(e.dependent_id)}>Edit</button>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this record")) {
                        onDelete(e.dependent_id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
