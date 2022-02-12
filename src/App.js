import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Provider from './Context/Provider';
import Choice from './Pages/Choice';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/" component={Login} />
        <Route exact path="/choice" component={Choice} />
      </Provider>
    </Switch>
  );
}

export default App;
