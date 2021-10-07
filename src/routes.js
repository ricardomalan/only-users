// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Users from './pages/UsersTable';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user-list" component={Users} />
        <Route path="/*">
          <h1>
            <center>404 page not found</center>
          </h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
