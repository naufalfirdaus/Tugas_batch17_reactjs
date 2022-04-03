import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Region from "./regions/Region";
import AddRegion from "./regions/AddRegion";
import EditRegion from "./regions/EditRegion";
import Countries from "./countries/Countries";
import AddCountries from "./countries/AddCountries";
import EditCountries from "./countries/EditCountries";

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
    </Switch>
  );
}
