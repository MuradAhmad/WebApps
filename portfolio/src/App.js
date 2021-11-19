import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/pages';
import Resume from './components/Resume';
import Data from '../src/components/Data';
import { homeObjOne, homeObjTwo } from '../src/components/InfoSection/Data';





function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />   
        <Route path="/Data" component ={Data}exact />
        <Route path="/Resume" component={Resume} exact /> 
      </Switch>
    </Router>
  );
}

export default App;
