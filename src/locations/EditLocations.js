import React, {useEffect,useState} from 'react'
import apiLocations from '../api/apiLocations'
import { useHistory } from 'react-router-dom'

export default function EditLocations({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        location_id : undefined,
        street_adress : '',
        postal_code : '',
        city : '',
        state_province : ''
    })
    useEffect(()=>{
        apiLocations.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                location_id : data.location_id,
                street_adress : data.street_adress,
                postal_code : data.postal_code,
                city : data.city,
                state_province : data.state_province
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
            street_adress : values.street_adress,
            postal_code : values.postal_code,
            city : values.city,
            state_province : values.city
        }
        await apiLocations.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/Locations')
        })
    }
  return (
    <div>
        <h1>Edit Locations</h1>
        <form>
            <div>
                <label>
                    street_adress : 
                </label>
                <input type='text' placeholder='street_adress' value={values.location_name} onChange={handleChange('street_adress')} />
            </div>
            <div>
                <label>
                    postal_code : 
                </label>
                <input type='text' placeholder='postal_code' value={values.location_name} onChange={handleChange('postal_code')} />
            </div>
            <div>
                <label>
                    city : 
                </label>
                <input type='text' placeholder='city' value={values.location_name} onChange={handleChange('city')} />
            </div>
            <div>
                <label>
                    state_province : 
                </label>
                <input type='text' placeholder='state_province' value={values.location_name} onChange={handleChange('state_province')} />
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
