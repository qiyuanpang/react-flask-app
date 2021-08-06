import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import BedPage from './Bed';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/bed'>
          <BedPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
