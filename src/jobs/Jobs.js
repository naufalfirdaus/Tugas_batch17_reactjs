import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DelJobsRequest, GetJobsRequest } from "../redux-saga/actions/JobsAction";

export default function Jobs() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobsStated);

  useEffect(() => {
    dispatch(GetJobsRequest());
  }, []);

  const onEdit = async (id) => {
    history.push(`jobs/edit/${id}`);
  };

  const onDelete = async (id) => {
    dispatch(DelJobsRequest(id));
  };

  return (
    <div>
      <h2>List of Jobs</h2>
      <button onClick={() => history.push("jobs/new")}>Add Jobs</button>
      <button onClick={() => history.push("/")}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Job Id</th>
            <th>Job Title</th>
            <th>Min Salary</th>
            <th>Max Salary</th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs.map((job) => {
              return (
                <tr>
                  <td>{job.job_id}</td>
                 <td>{job.job_title}</td>
                 <td>{job.min_salary}</td>
                 <td>{job.max_salary}</td>
                  <button onClick={() => onEdit(job.job_id)}>Edit</button>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this record")) {
                        onDelete(job.job_id);
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