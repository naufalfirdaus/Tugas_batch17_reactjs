import React, { useState, useEffect } from 'react';
import apiJob from '../api/apiJob';
import { useHistory } from 'react-router-dom';

export default function Job() {
  let history = useHistory();
  const [job, setJob] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    apiJob.list().then((data) => setJob(data));
  }, []);

  useEffect(() => {
    apiJob.list().then((data) => setJob(data));
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id) => {
    await apiJob
      .deleteRow(id)
      .then((_) => {
        window.alert('Data succesfully deleted!');
        setRefresh(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>List of Jobs</h2>
      <button onClick={() => history.push('/job/new')}>Add Job</button>
      <button onClick={() => history.push('/')}>Back</button>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Min Salaray</th>
          <th>Max Salary</th>
        </thead>
        <tbody>
          {job &&
            job.map((j, index) => {
              return (
                <tr key={index}>
                  <td>{j.job_id}</td>
                  <td>{j.job_title}</td>
                  <td>{j.min_salary}</td>
                  <td>{j.max_salary}</td>
                  <td>
                    <button onClick={() => history.push(`/job/${j.job_id}`)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (window.confirm('Delete this record?')) {
                          onDelete(j.job_id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
