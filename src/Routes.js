import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Region from "./regions/Region";
import AddRegion from "./regions/AddRegion";
import EditRegion from "./regions/EditRegion";
import Countries from "./countries/Countries";
import AddCountries from "./countries/AddCountries";
import EditCountries from "./countries/EditCountries";
import Location from "./locations/Location";
import AddLocation from "./locations/AddLocation"
import EditLocation from "./locations/EditLocation"
import Department from "./departments/Department"
import AddDepartment from "./departments/AddDepartment";
import EditDepartment from "./departments/EditDepartment";
import Job from "./jobs/Job";
import AddJob from "./jobs/AddJob"
import EditJob from "./jobs/EditJob"
import Dependent from "./dependents/Dependent"
import AddDependent from "./dependents/AddDependent";
import EditDependent from "./dependents/EditDependent"

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
      <Route exact path="/location" component={Location} />
      <Route exact path="/location/new" component={AddLocation} />
      <Route exact path="/location/edit/:id" component={EditLocation} />
      <Route exact path="/department" component={Department} />
      <Route exact path="/department/new" component={AddDepartment} />
      <Route exact path="/department/edit/:id" component={EditDepartment} />
      <Route exact path="/job" component={Job} />
      <Route exact path="/job/new" component={AddJob} />
      <Route exact path="/job/edit/:id" component={EditJob} />
      <Route exact path="/dependent" component={Dependent} />
      <Route exact path="/dependent/new" component={AddDependent} />
      <Route exact path="/dependent/edit/:id" component={EditDependent} />
    </Switch>
  );
}
