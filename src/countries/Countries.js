import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { DelCountriesRequest, GetCountriesRequest } from '../redux-saga/actions/CountriesAction'

export default function Countries() {
  let history = useHistory()
  const dispatch = useDispatch()
  const { countries } = useSelector((state) => state.countriesStated)

  useEffect(() => {
    dispatch(GetCountriesRequest())
  }, [])

  const onEdit = async (id) => {
    history.push(`countries/edit/${id}`)
  };

  const onDelete = async (id) => {
    dispatch(DelCountriesRequest(id))
  };

  return (
    <div>
      <h2>List of Countries</h2>
      <button onClick={() => history.push('countries/new')}>Add Countries</button>
      <button onClick={() => history.push('/')}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Country Id</th>
            <th>Country Name</th>
            <th>Region Id</th>
          </tr>
        </thead>
        <tbody>
          {countries &&
            countries.map((coun) => {
              return (
                <tr>
                  <td>{coun.country_id}</td>
                  <td>{coun.country_name}</td>
                  <td>{coun.region_id}</td>
                  <button onClick={() => onEdit(coun.country_id)}>Edit</button>
                  <button
                    onClick={() => {
                      if (window.confirm('Delete this record')) {
                        onDelete(coun.country_id)
                      }
                    }}
                  >
                    Delete
                  </button>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}