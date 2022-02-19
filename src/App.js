import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './Context/Provider';
import Choice from './Pages/Choice';
import Login from './Pages/Login';
import Profile from './Pages/Profile';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={Login} />
        <Route exact path="/choice" component={Choice} />
        <Route exact path="/Profile" component={Profile} />
      </Provider>
    </Switch>
  );
}

export default App;
