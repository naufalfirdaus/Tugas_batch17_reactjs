import React,{useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import {useHistory} from 'react-router-dom'

export default function AddLocations() {
    let history = useHistory()
    const [value,setValue] = useState({
        location_id : '',
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
            state_province : (value.state_province) ||'',
            country_id : (value.country_id) ||''
        }
        await apiLocations.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/locations')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Locations</h1>
        <form>
        <div>
                <label>
                    location Id : 
                </label>
                <input type='text' placeholder='location_id' onChange={handleChange('location_id')} />
            </div>
            <div>
                <label>
                    street address : 
                </label>
                <input type='text' placeholder='street_address' onChange={handleChange('street_address')} />
            </div>
            <div>
                <label>
                    postal  code : 
                </label>
                <input type='text' placeholder='postal_code' onChange={handleChange('postal_code')} />
            </div>            <div>
                <label>
                    city : 
                </label>
                <input type='text' placeholder='city' onChange={handleChange('city')} />
            </div>            
            <div>
                <label>
                    state  province : 
                </label>
                <input type='text' placeholder='state_province' onChange={handleChange('state_province')} />
            </div>
            <div>
                <label>
                    country id : 
                </label>
                <input type='text' placeholder='country_id' onChange={handleChange('country_id')} />
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