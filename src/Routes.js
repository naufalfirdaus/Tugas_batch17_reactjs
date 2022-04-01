import React from 'react'
import { Switch,Redirect,Route } from 'react-router-dom'
import mainLayout from './layout/mainLayout'
import Region from './regions/Region'
import AddRegion from './regions/AddRegion'
import EditRegion from './regions/EditRegion'
import Country from './countries/Country'
import AddCountry from './countries/AddCountry'
import EditCountry from './countries/EditCountry'
import Department from './departments/Department'
import AddDepartment from './departments/AddDepartment'
import EditDepartment from './departments/EditDepartment'
import Dependent from './dependents/Dependent'
import AddDependent from './dependents/AddDependent'
import EditDependent from './dependents/EditDependent'
import Employee from './employees/Employee'
import AddEmployee from './employees/AddEmployee'
import Job from './jobs/Job'
import AddJob from './jobs/AddJob'
import EditJob from './jobs/EditJob'
import Location from './locations/Location'
import AddLocation from './locations/AddLocation'
import EditLocation from './locations/EditLocation'
import User from './users/User'
 
export default function Routes() {
  return (
    <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={mainLayout}/>
        <Route exact path='/region' component={Region}/>
        <Route exact path='/region/new' component={AddRegion}/>
        <Route exact path='/region/edit/:id' component={EditRegion}/>
        <Route exact path='/country' component={Country}/>
        <Route exact path='/country/new' component={AddCountry}/>
        <Route exact path='/country/edit/:id' component={EditCountry}/>
        <Route exact path='/department' component={Department}/>
        <Route exact path='/department/new' component={AddDepartment}/>
        <Route exact path='/department/edit/:id' component={EditDepartment}/>
        <Route exact path='/dependent' component={Dependent}/>
        <Route exact path='/dependent/new' component={AddDependent}/>
        <Route exact path='/dependent/edit/:id' component={EditDependent}/>
        <Route exact path='/employee' component={Employee}/>
        <Route exact path='/employee/new' component={AddEmployee}/>

        <Route exact path='/job' component={Job}/>
        <Route exact path='/job/new' component={AddJob}/>
        <Route exact path='/job/edit/:id' component={EditJob}/>
        <Route exact path='/location' component={Location}/>
        <Route exact path='/location/new' component={AddLocation}/>
        <Route exact path='/location/edit/:id' component={EditLocation}/>
        <Route exact path='/user' component={User}/>


    </Switch>
  )
}
 