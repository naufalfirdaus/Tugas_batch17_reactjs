import React, {useEffect,useState} from 'react'
import apiLocation from '../api/apiLocation'
import { useHistory } from 'react-router-dom'

export default function EditLocation({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        location_id : '',
        street_address : '',
        postal_code : '',
        city : '',
        state_province : '',
        country_id : ''
    })
    useEffect(()=>{
        apiLocation.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                location_id : data.location_id,
                street_address : data.street_address,
                postal_code : data.postal_code,
                city : data.city,
                state_province : data.state_province,
                country_id : data.country_id
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event =>{
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            location_id : values.location_id,
            street_address : values.street_address,
            postal_code : values.postal_code,
            city : values.city,
            state_province : values.state_province,
            country_id : values.country_id
        }
        await apiLocation.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/location')
        })
    }
  return (
    <div>
        <h1>Edit Location</h1>
        <form>    
            <label>
                Location Id :
            </label>
            <input type='text' placeholder='Location Id' value={values.location_id} onChange={handleChange('location_id')}/><br/>

            <label>
                Street Address :
            </label>
            <input type='text' placeholder='Street Address' value={values.street_address} onChange={handleChange('street_address')}/><br/>

            <label>
                Postal Code :
            </label>
            <input type='text' placeholder='Postal Code' value={values.postal_code} onChange={handleChange('postal_code')}/><br/>

            <label>
                City :
            </label>
            <input type='text' placeholder='City' value={values.city} onChange={handleChange('city')}/><br/>

            <label>
                State Province :
            </label>
            <input type='text' placeholder='State Province' value={values.state_province} onChange={handleChange('state_province')}/><br/>

            <label>
                Country Id :
            </label>
            <input type='text' placeholder='Country Id' value={values.country_id} onChange={handleChange('country_id')}/><br/>
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
