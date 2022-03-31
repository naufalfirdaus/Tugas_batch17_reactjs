import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiJob from '../api/apiJob';

export default function EditJob({ match }) {
  let history = useHistory();
  const [values, setValues] = useState({
    job_id: undefined,
    job_title: undefined,
    min_salary: undefined,
    max_salary: undefined,
  });

  useEffect(() => {
    apiJob
      .findOne(match.params.id)
      .then((data) => {
        setValues({ ...values, ...data });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = async () => {
    await apiJob
      .update(values)
      .then((_) => {
        window.alert('Data succesfully updated!');
        history.push('/job');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Edit Jobs</h1>
      <form>
        <div>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Job Title"
            value={values.job_title}
            onChange={handleChange('job_title')}
            required
          />
        </div>
        <div>
          <label>Min Salary</label>
          <input
            type="number"
            placeholder="Min Salary"
            value={values.min_salary}
            onChange={handleChange('min_salary')}
            required
          />
        </div>
        <div>
          <label>Max Salary</label>
          <input
            type="number"
            placeholder="Max Salary"
            value={values.max_salary}
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
