import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Region from "./regions/Region";
import AddRegion from "./regions/AddRegion";
import EditRegion from "./regions/EditRegion";
import Countries from "./countries/Countries";
import AddCountries from "./countries/AddCountries";
import EditCountries from "./countries/EditCountries";
import Locations from "./locations/Locations";
import AddLocations from "./locations/AddLocations";
import EditLocations from "./locations/EditLocations";
import Departments from "./departments/Departments";
import AddDepartments from "./departments/AddDepartments";
import EditDepartments from "./departments/EditDepartments";
import Jobs from "./jobs/Jobs";
import AddJobs from "./jobs/AddJobs";
import EditJobs from "./jobs/EditJobs";
import Dependents from "./dependents/Dependents";
import AddDependents from "./dependents/AddDependents";
import EditDependents from "./dependents/EditDependents";


export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={MainLayout} />
      <Route exact path="/region" component={Region} />
      <Route exact path="/region/new" component={AddRegion} />
      <Route exact path="/region/edit/:id" component={EditRegion} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/countries/new" component={AddCountries} />
      <Route exact path="/countries/edit/:id" component={EditCountries} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/locations/new" component={AddLocations} />
      <Route exact path="/locations/edit/:id" component={EditLocations} />
      <Route exact path="/departments" component={Departments} />
      <Route exact path="/departments/new" component={AddDepartments} />
      <Route exact path="/departments/edit/:id" component={EditDepartments} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs/new" component={AddJobs} />
      <Route exact path="/jobs/edit/:id" component={EditJobs} />
      <Route exact path="/dependents" component={Dependents} />
      <Route exact path="/dependents/new" component={AddDependents} />
      <Route exact path="/dependents/edit/:id" component={EditDependents} />
      
    </Switch>
  );
}