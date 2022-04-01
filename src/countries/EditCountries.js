import React, {useEffect,useState} from 'react'
import apiCountries from '../api/apiCountries'
import { useHistory } from 'react-router-dom'

export default function EditCountries({match}) {
    let history = useHistory()
    const [values,setValues] = useState({
        country_id : undefined,
        country_name : ''
    })
    useEffect(()=>{
        apiCountries.findOne(match.params.id)
        .then(data =>{
            setValues({
                ...values,
                country_id : data.country_id,
                country_name : data.country_name
            })
        })
        .catch(error => console.log(error))
    },[])
    const handleChange = name => event => {
        setValues({...values,[name]: event.target.value})
    }
    const onSubmit = async () =>{
        const payload ={
            country_id : values.country_id,
            country_name : values.country_name
        }
        await apiCountries.update(payload)
        .then(result => {
            window.alert('Data Successfully Edited')
            history.push('/countries')
        })
    }
  return (
    <div>
        <h1>Edit countries</h1>
        <form>
            <div>
                <label>
                    Countries Name : 
                </label>
                <input type='text' placeholder='Countries Name' value={values.country_name} onChange={handleChange('country_name')} />
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
