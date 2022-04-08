import React,{useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import {useHistory} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { GetLocationsRequest,AddLocationsRequest } from '../redux-saga/actions/LocationsAction'
export default function AddLocations() {
    let history = useHistory()
    const dispatch = useDispatch()
    const { locations } = useSelector((state) => state.locationsStated)
    const [value,setValue] = useState({
        location_id : undefined,
        street_address : '',
        postal_code : '',
        city : '',
        state_province : '',
        country_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            location_id : (value.location_id) || '',
            street_address : (value.street_address) || '',
            postal_code : (value.postal_code) || '',
            city : (value.city) || '',
            state_province : (value.state_province) || '',
            country_id : (value.country_id) || '',
        }
        dispatch(AddLocationsRequest(payload))
        window.alert('Data Succesfully Insert')
        history.push('/locations')
    }

  return (
    <div>
        <h1>Add locations</h1>
        <form>
            <div>
                <label>
                    Location Id : 
                </label>
                <input type='text' name='location_id' id='location_id' placeholder='location id' onChange={handleChange('location_id')} />
            </div>
            <div>
                <label>
                    Street Address : 
                </label>
                <input type='text' name='street_address' id='street_address' placeholder='street address' onChange={handleChange('street_address')} />
            </div>
            <div>
                <label>
                    Postal Code : 
                </label>
                <input type='text' name='postal_code' id='postal_code' placeholder='postal code' onChange={handleChange('postal_code')} />
            </div>
            <div>
                <label>
                    City : 
                </label>
                <input type='text' name='city' id='city' placeholder='city' onChange={handleChange('city')} />
            </div>
            <div>
                <label>
                    State Province : 
                </label>
                <input type='text' name='state_province' id='state_province' placeholder='state province' onChange={handleChange('state_province')} />
            </div>
            <div>
                <label>
                   Country Id : 
                </label>
                <input type='text' name='country_id' id='country_id' placeholder='country id' onChange={handleChange('country_id')} />
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