import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import apiDepartments from "../api/apiDepartments";

export default function EditDepartments({ match }) {
  let history = useHistory();
  const [values, setValues] = useState({
    department_id: undefined,
    department_name: "",
    location_id: "",
  });
  useEffect(() => {
    apiDepartments
      .findOne(match.params.id)
      .then((data) => {
        setValues({
          ...values,
          department_id: data.department_id,
          department_name: data.department_name,
          location_id: data.location_id,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      department_id: values.department_id,
      department_name: values.department_name,
      location_id: values.location_id,
    };
    await apiDepartments.update(payload).then((result) => {
      window.alert("Data Successfully Edited");
      history.push("/departments");
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Department Name</label>
          <input type="text" placeholder="Department Name" value={values.department_name} onChange={handleChange("department_name")} />
        </div>
        <div>
          <label>Region Id</label>
          <input type="text" placeholder="Location ID" value={values.location_id} onChange={handleChange("location_id")} />
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
            back
          </button>
        </div>
      </form>
    </div>
  );
}
