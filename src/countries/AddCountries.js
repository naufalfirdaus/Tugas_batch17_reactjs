import React,{useEffect,useState} from 'react'
import apiCountries from '../api/apiCountries'
import {useHistory} from 'react-router-dom'

export default function AddCountries() {
    let history = useHistory()
    const [value,setValue] = useState({
        country_id : '',
        country_name : '',
        region_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            country_id : (value.country_id) || '',
            country_name : (value.country_name) || '',
            region_id : (value.region_id) || ''
        }
        await apiCountries.Create(payload)
        .then(result =>{
            window.alert('Data Succesfully Insert')
            history.push('/countries')
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
        <h1>Add Country</h1>
        <form>
            <div>
                <label>
                    Country ID : 
                </label>
                <input type='text' placeholder='Country ID' onChange={handleChange('country_id')} />
            </div>
            <div>
                <label>
                    Country Name : 
                </label>
                <input type='text' placeholder='Country Name' onChange={handleChange('country_name')} />
            </div>
            <div>
                <label>
                    Region ID : 
                </label>
                <input type='text' placeholder='Region ID' onChange={handleChange('region_id')} />
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