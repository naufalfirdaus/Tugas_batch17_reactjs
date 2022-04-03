import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddDepartmentsRequest } from "../redux-saga/actions/DepartmentsAction";

export default function AddDepartments() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    department_id: "",
    department_name: "",
    location_id: "",
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      department_id: value.department_id || "",
      department_name: value.department_name || "",
      location_id: value.location_id || "",
    };
    dispatch(AddDepartmentsRequest(payload));
    window.alert("Add Data Successfully");
    history.push("/departments");
  };

  return (
    <div>
      <h1>Add Department</h1>
      <form>
        <div>
          <label>Department ID</label>
          <input type="text" placeholder="Add New Department ID" onChange={handleChange("department_id")} />
        </div>
        <div>
          <label>Department Name</label>
          <input type="text" placeholder="Add New Department Name" onChange={handleChange("department_name")} />
        </div>
        <div>
          <label>Location ID</label>
          <input type="text" placeholder="Location ID Must to There is Table Region" onChange={handleChange("location_id")} />
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
