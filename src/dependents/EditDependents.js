import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import apiDependents from "../api/apiDependents";

export default function EditDependents({ match }) {
  let history = useHistory();
  const [values, setValues] = useState({
    dependent_id: undefined,
    first_name: "",
    last_name: "",
    relationship: "",
    employee_id: "",
  });
  useEffect(() => {
    apiDependents
      .findOne(match.params.id)
      .then((data) => {
        setValues({
          ...values,
          dependent_id: data.dependent_id,
          first_name: data.first_name,
          last_name: data.last_name,
          relationship: data.relationship,
          employee_id: data.employee_id,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      dependent_id: values.dependent_id,
      first_name: values.first_name,
      last_name: values.last_name,
      relationship: values.relationship,
      employee_id: values.employee_id,
    };
    await apiDependents.update(payload).then((result) => {
      window.alert("Data Successfully Edited");
      history.push("/dependents");
    });
  };

  return (
    <div>
      <h1> Edit Dependent</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" value={values.first_name} onChange={handleChange("first_name")} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" value={values.last_name} onChange={handleChange("last_name")} />
        </div>
        <div>
          <label>Relationship</label>
          <input type="text" placeholder="Relationship" value={values.relationship} onChange={handleChange("relationship")} />
        </div>
        <div>
          <label>Employee ID</label>
          <input type="text" placeholder="Employee ID" value={values.employee_id} onChange={handleChange("employee_id")} />
        </div>
        <div>
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
