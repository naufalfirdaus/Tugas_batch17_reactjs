import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import apiDepartment from "../api/apiDepartment";

export default function EditDepartment({ match }) {
  let history = useHistory();
  const [values, setValues] = useState({
    department_id : '',
    department_name : '',
    location_id : ''
  });
  useEffect(() => {
    apiDepartment.findOne(match.params.id)
      .then((data) => {
        setValues({
            ...values,
            department_id : data.department_id,
            department_name : data.department_name,
            location_id : data.location_id
        });
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
        department_id : (values.department_id),
        department_name : (values.department_name)
    };
    await apiDepartment.update(payload).then((result) => {
      window.alert("Data Successfully Edited");
      history.push("/department");
    });
  };

  return (
    <div>
    <h1>Add Department</h1>
    <form>
        <div>
            <label>
                Department Name : 
            </label>
            <input type='text' placeholder='Department Name' value={values.department_name} onChange={handleChange('department_name')} />
        </div>
    </form>
    <div>
        <button type='button' onClick={onSubmit}>
            Submit
        </button>
        <button type='button' onClick={()=>history.goBack()}>
            Cancel
        </button>
    </div>
</div>
)
}
