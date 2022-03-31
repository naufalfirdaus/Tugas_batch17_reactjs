import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiJob from '../api/apiJob';

export default function AddJob() {
  let history = useHistory();
  const [values, setValues] = useState({
    job_title: undefined,
    min_salary: undefined,
    max_salary: undefined,
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = async () => {
    await apiJob
      .create(values)
      .then((_) => {
        window.alert('Data succesfully inserted!');
        history.push('/job');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Add Jobs</h1>
      <form>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            onChange={handleChange('job_title')}
            required
          />
        </div>
        <div>
          <label>Min Salary</label>
          <input
            type="number"
            placeholder="Min Salary"
            onChange={handleChange('min_salary')}
            required
          />
        </div>
        <div>
          <label>Max Salary</label>
          <input
            type="number"
            placeholder="Max Salary"
            onChange={handleChange('max_salary')}
            required
          />
        </div>
        <div>
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
          <button type="button" onClick={() => history.goBack()}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
