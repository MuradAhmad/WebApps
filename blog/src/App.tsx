import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../src/pages';
import Overview from './pages/Overview';





function App() {
  return (
    <Router>
      <Home/>
      <Switch>
        <Route path="/overview" component={Overview} exact />   
      </Switch>
    </Router>
  );
}

export default App;
