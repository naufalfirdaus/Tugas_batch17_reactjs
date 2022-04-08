import React, {useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import { useHistory } from 'react-router-dom'

export default function EditLocations({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        location_id : undefined,
        street_address : '',
        postal_code : '',
        city : '',
        state_province:'',
        country_id : ''
    })
    useEffect(()=>{
        apiLocations.findOne(match.params.id)
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
    const handleChange = name => event => {
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
        await apiLocations.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/locations')
        })
    }
  return (
    <div>
        <h1>Edit Locations</h1>
        <form>
            <div>
                <label>
                   Location Id : 
                </label>
                <input type='text' name='location_id' id='location_id' placeholder='location id' value={values.location_id} onChange={handleChange('location_id')} />
            </div>
            <div>
                <label>
                    Street Address : 
                </label>
                <input type='text' name='street_address' id='street_address' placeholder='street adress' value={values.street_address} onChange={handleChange('street_address')} />
            </div>
            <div>
                <label>
                    Postal Code : 
                </label>
                <input type='text' name='postal_code' id='postal_code' placeholder='Postal Code' value={values.postal_code} onChange={handleChange('postal_code')} />
            </div>
            <div>
                <label>
                    City : 
                </label>
                <input type='text' name='city' id='city' placeholder='City' value={values.city} onChange={handleChange('city')} />
            </div>
            <div>
                <label>
                    State Province : 
                </label>
                <input type='text' name='state_province' id='state_province' placeholder='Region Name' value={values.state_province} onChange={handleChange('state_province')} />
            </div>
            <div>
                <label>
                   Country Id : 
                </label>
                 <input type='text' name='country_id' id='country_id' placeholder='Region Name' value={values.country_id} onChange={handleChange('country_id')} />
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