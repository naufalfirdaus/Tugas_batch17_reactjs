import React,{useEffect,useState} from 'react'
import apiLocation from '../api/apiLocation'
import { useHistory } from 'react-router-dom'

export default function AddLocation() {
    let history = useHistory()
    const [value,setValue] = useState({
        location_id : '',
        street_address : '',
        postal_code : '',
        city : '',
        state_province : '',
        country_id : ''
    })
    
    const handleChange = name => event => {
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
        await apiLocation.Create(payload)
        .then(result =>{
            window.alert('Data Successfully Insert')
            history.push('/location')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Location</h1>
        <form>
            <label>
                Location Id :
            </label>
            <input type='text' placeholder='Location Id' onChange={handleChange('location_id')}/><br/>

            <label>
                Street Address :
            </label>
            <input type='text' placeholder='Street Address' onChange={handleChange('street_address')}/><br/>

            <label>
                Postal Code :
            </label>
            <input type='text' placeholder='Postal Code' onChange={handleChange('postal_code')}/><br/>

            <label>
                City :
            </label>
            <input type='text' placeholder='City' onChange={handleChange('city')}/><br/>

            <label>
                State Province :
            </label>
            <input type='text' placeholder='State Province' onChange={handleChange('state_province')}/><br/>

            <label>
                Country Id :
            </label>
            <input type='text' placeholder='Country Id' onChange={handleChange('country_id')}/><br/>
            
        </form>
        <button type='button' onClick={onSubmit}>
            Submit
        </button>
        <button type='button' onClick={()=>history.goBack()}>
            Cancel
        </button>
    </div>
  )
}
