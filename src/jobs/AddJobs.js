import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddJobsRequest } from "../redux-saga/actions/JobsAction";

export default function AddJobs() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    job_id: "",
    job_title: "",
    min_salary: "",
    max_salary: "",
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      job_id: value.job_id || "",
      job_title: value.job_title || "",
      min_salary: value.min_salary || "",
      max_salary: value.max_salary || "",
    };
    dispatch(AddJobsRequest(payload));
    window.alert("Add Data Successfully");
    history.push("/jobs");
  };

  return (
    <div>
      <h1>Add Jobs</h1>
      <form>
        <div>
          <label>Job ID</label>
          <input type="text" placeholder="Add New Job ID" onChange={handleChange("job_id")} />
        </div>
        <div>
          <label>Job Title</label>
          <input type="text" placeholder="Add New Job Title" onChange={handleChange("job_title")} />
        </div>
        <div>
          <label>Min Salary</label>
          <input type="text" placeholder="Add New Min Salary" onChange={handleChange("min_salary")} />
        </div>
        <div>
          <label>Max Salary</label>
          <input type="text" placeholder="Add New Max Salary" onChange={handleChange("max_salary")} />
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
