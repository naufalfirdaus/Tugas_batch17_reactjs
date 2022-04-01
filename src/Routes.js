import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Region from './controller/Region'
import Countries from './controller/Countries'
import Departments from './controller/Departments'
import Dependents from './controller/Dependents'
import Jobs from './controller/Jobs'
import Locations from './controller/Locations'
import AddRegion from './controller/AddRegion'
import AddCountries from './controller/AddCountries'
import AddDepartments from './controller/AddDepartments'
import AddDependents from './controller/AddDependents'
import AddLocations from './controller/AddLocations'
import Addjob from './controller/AddJobs'
import EditRegion from './controller/EditRegion'
import EditCountry from './controller/EditCountries'
import EditDepartment from './controller/EditDepartment'
import EditDependent from './controller/EditDependents'
import EditLocation from './controller/EditLocations'
import EditJobs from './controller/EditJobs'

export default function Routes() {
  return (
    <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={MainLayout}/>
        <Route exact path='/region' component={Region}/>
        <Route exact path='/country' component={Countries}/>
        <Route exact path='/department' component={Departments}/>
        <Route exact path='/dependent' component={Dependents}/>
        <Route exact path='/job' component={Jobs}/>
        <Route exact path='/location' component={Locations}/>
        <Route exact path='/region/new' component={AddRegion}/>
        <Route exact path='/country/new' component={AddCountries}/>
        <Route exact path='/department/new' component={AddDepartments}/>
        <Route exact path='/dependent/new' component={AddDependents}/>
        <Route exact path='/location/new' component={AddLocations}/>
        <Route exact path='/job/new' component={Addjob}/>
        <Route exact path='/region/edit/:id' component={EditRegion}/>
        <Route exact path='/country/edit/:id' component={EditCountry}/>
        <Route exact path='/department/edit/:id' component={EditDepartment}/>
        <Route exact path='/dependent/edit/:id' component={EditDependent}/>
        <Route exact path='/location/edit/:id' component={EditLocation}/>
        <Route exact path='/job/edit/:id' component={EditJobs}/>
    </Switch>
    )
}
