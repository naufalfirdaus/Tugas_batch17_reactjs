import React,{useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import {useHistory} from 'react-router-dom'

export default function EditLocations({match}) {
    let history = useHistory()
    const [value,setValue] = useState({
        location_id : 0,
        street_address : '',
        postal_code : '',
        city : '',
        state_province : '',
        country_id : ''
    })

    useEffect(()=>{
        apiLocations.findOne(match.params.id)
        .then(data =>{
            setValue({
                ...value,
                location_id : data.location_id,
                street_address : data.street_address,
                last_name : data.last_name,
                postal_code : data.postal_code,
                city : data.city,
                state_province : data.state_province,
                country_id : data.country_id

            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            location_id : value.location_id,
            street_address : value.street_address,
            postal_code : value.postal_code,
            city : value.city,
            state_province : value.state_province,
            country_id : value.country_id
        }
        await apiLocations.update(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/location')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Edit Location</h1>
        <form>
            <div>
                <label>
                    Street Address : 
                </label>
                <input type='text' placeholder='Street Address' onChange={handleChange('street_address')} />
            </div>
            <div>
                <label>
                    Postal Code : 
                </label>
                <input type='text' placeholder='Postal Code' onChange={handleChange('postal_code')} />
            </div>
            <div>
                <label>
                    City : 
                </label>
                <input type='text' placeholder='City' onChange={handleChange('city')} />
            </div>
            <div>
                <label>
                    State Province : 
                </label>
                <input type='text' placeholder='State Province' onChange={handleChange('state_province')} />
            </div>
            <div>
                <label>
                    Country ID : 
                </label>
                <input type='text' placeholder='Country ID' onChange={handleChange('country_id')} />
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
