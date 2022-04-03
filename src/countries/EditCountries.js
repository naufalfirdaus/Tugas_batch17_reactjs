import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import apiCountries from "../api/apiCountries";

export default function EditCountries({ match }) {
  let history = useHistory();
  const [values, setValues] = useState({
    country_id: undefined,
    country_name: "",
    region_id: "",
  });
  useEffect(() => {
    apiCountries
      .findOne(match.params.id)
      .then((data) => {
        setValues({
          ...values,
          country_id: data.country_id,
          country_name: data.country_name,
          region_id: data.region_id,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      country_id: values.country_id,
      country_name: values.country_name,
      region_id: values.region_id,
    };
    await apiCountries.update(payload).then((result) => {
      window.alert("Data Successfully Edited");
      history.push("/countries");
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>Country Name</label>
          <input type="text" placeholder="Country Name" value={values.country_name} onChange={handleChange("country_name")} />
        </div>
        <div>
          <label>Region Id</label>
          <input type="text" placeholder="Country Name" value={values.region_id} onChange={handleChange("region_id")} />
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
