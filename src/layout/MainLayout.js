import React from 'react'
import {Link} from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <h2>Main Layout</h2>
        <ul>
            <Link to='/region'>
                Region <br/>
            </Link> 
            <Link to='/countries'>
                countries<br/>
            </Link>
            <Link to='/departments'>
                Departments <br/>
            </Link> 
            <Link to='/locations'>
                Locations <br/>
            </Link> 
            <Link to='/dependents'>
                Dependents <br/>
            </Link> 
        </ul>
    </div>
  )
}
