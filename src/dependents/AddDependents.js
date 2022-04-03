import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddDependentsRequest } from "../redux-saga/actions/DependentsAction";

export default function AddDependents() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    dependent_id: "",
    first_name: "",
    last_name: "",
    relationship: "",
    employee_id: "",
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      dependent_id: value.dependent_id || "",
      first_name: value.first_name || "",
      last_name: value.last_name || "",
      relationship: value.relationship || "",
      employee_id: value.employee_id,
    };
    dispatch(AddDependentsRequest(payload));
    window.alert("Add Data Successfully");
    history.push("/dependents");
  };

  return (
    <div>
      <h1>Add Dependents</h1>
      <form>
        <div>
          <label>Dependent ID</label>
          <input type="text" placeholder="Add New Dependent ID" onChange={handleChange("dependent_id")} />
        </div>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="Add New First Name" onChange={handleChange("first_name")} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Add New Last Name" onChange={handleChange("last_name")} />
        </div>
        <div>
          <label>Relationship</label>
          <input type="text" placeholder="Add New Relationship" onChange={handleChange("relationship")} />
        </div>
        <div>
          <label>Employee ID</label>
          <input type="text" placeholder="Employee ID Must to There is Table Employee" onChange={handleChange("employee_id")} />
        </div>
      </form>
      <div>
        <button type="submit" onClick={onSubmit}>
          Save
        </button>
        <button onClick={() => history.goBack()}>Back</button>
      </div>
    </div>
  );
}
