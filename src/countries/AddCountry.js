import React,{useEffect,useState} from 'react'
import apiCountry from '../api/apiCountry'
import { useHistory } from 'react-router-dom'

export default function AddCountry() {
    let history = useHistory()
    const [value,setValue] = useState({
        country_id : '',
        country_name : '',
        region_id : ''
    })
    
    const handleChange = name => event => {
        setValue({...value,[name]:event.target.value})
    }

    const onSubmit = async()=>{
        const payload = {
            country_id : (value.country_id) || '',
            country_name : (value.country_name) || '',
            region_id : (value.region_id) || ''
        }
        await apiCountry.Create(payload)
        .then(result =>{
            window.alert('Data Successfully Insert')
            history.push('/country')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Country</h1>
        <form>
            <label>
                Country Id :
            </label>
            <input type='text' placeholder='Country Id' onChange={handleChange('country_id')}/><br/>
    
            <label>
                Country Name :
            </label>
            <input type='text' placeholder='Country Name' onChange={handleChange('country_name')}/><br/>

            <label>
                Region Id :
            </label>
            <input type='text' placeholder='Region Id' onChange={handleChange('region_id')}/><br/>
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
