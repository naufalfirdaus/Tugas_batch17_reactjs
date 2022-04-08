import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AddCountriesRequest } from '../redux-saga/actions/CountriesAction'

export default function AddCountries() {
  let history = useHistory()
  const dispatch = useDispatch()

  const [value, setValue] = useState({
    country_id: '',
    country_name: '',
    region_id: ''
  });

  const handleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      country_id: value.country_id || '',
      country_name: value.country_name || '',
      region_id: value.region_id || ''
    };
    dispatch(AddCountriesRequest(payload))
    window.alert('Add Data Successfully')
    history.push('countries')
  };

  return (
    <div>
      <h1>Add Countries</h1>
      <form>
        <div>
          <label>Country ID </label>
          <input type='text' name='country_id' id='country_id' placeholder='country id' onChange={handleChange('country_id')} />
        </div>
        <div>
          <label>Country Name </label>
          <input type='text' name='country_name' id='country_name' placeholder='country name' onChange={handleChange('country_name')} />
        </div>
        <div>
          <label>Region ID </label>
          <input type='text' name='region_id' id='region_id' placeholder='region id' onChange={handleChange('region_id')} />
        </div>
      </form>
      <div>
        <button type='submit' onClick={onSubmit}>
          Submit
        </button>
        <button onClick={() => history.goBack()}>Cancel</button>
      </div>
    </div>
  );
}