import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Region from './regions/Region';
import AddRegion from './regions/AddRegion';
import EditRegion from './regions/EditRegion';
import Job from './jobs/Job';
import AddJob from './jobs/AddJob';
import EditJob from './jobs/EditJob';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={MainLayout} />
      <Route exact path="/region" component={Region} />
      <Route exact path="/region/new" component={AddRegion} />
      <Route exact path="/region/edit/:id" component={EditRegion} />
      <Route exact path="/job" component={Job} />
      <Route exact path="/job/new" component={AddJob} />
      <Route exact path="/job/:id" component={EditJob} />
    </Switch>
  );
}
