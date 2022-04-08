import React,{useEffect,useState} from 'react'
import apiDependents from '../api/apiDependents'
import {useHistory} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { GetDependentsRequest,AddDependentsRequest } from '../redux-saga/actions/DependentsAction'
export default function AddDependents() {
    let history = useHistory()
    const dispatch = useDispatch()
    const { dependents } = useSelector((state) => state.dependentsStated)
    const [value,setValue] = useState({
        dependent_id : undefined,
        first_name : '',
        last_name : '',
        relationship : '',
        employee_id : ''
    })
    const handleChange = name => event =>{
        setValue({...value,[name]:event.target.value})
    }
    const onSubmit = async()=>{
        const payload = {
            dependent_id : (value.dependent_id) || '',
            first_name : (value.first_name) || '',
            last_name : (value.last_name) || '',
            relationship : (value.relationship) || '',
            employee_id : (value.employee_id) || ''
        }
        dispatch(AddDependentsRequest(payload))
        window.alert('Data Succesfully Insert')
        history.push('/dependents')
    }

  return (
    <div>
        <h1>Add Dependents</h1>
        <form>
            <div>
                <label>
                    Dependent Id : 
                </label>
                <input type='text' name='dependent_id' id='dependent_id' placeholder='dependent id' onChange={handleChange('dependent_id')} />
            </div>
            <div>
                <label>
                    First Name : 
                </label>
                <input type='text' name='first_name' id='first_name' placeholder='first name' onChange={handleChange('first_name')} />
            </div>
            <div>
                <label>
                    Last Name : 
                </label>
                <input type='text' name='last_name' id='last_name' placeholder='last name' onChange={handleChange('last_name')} />
            </div>
            <div>
                <label>
                    Relationship : 
                </label>
                <input type='text' name='relationship' id='relationship' placeholder='relationship' onChange={handleChange('relationship')} />
            </div>
            <div>
                <label>
                    Employee Id : 
                </label>
                <input type='text' name='employee_id' id='employee_id' placeholder='employess id' onChange={handleChange('employee_id')} />
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