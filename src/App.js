import React from 'react';
import './App.css';
import Header from './containers/shared/Header'
import LogInForm from './containers/LogInForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './containers/Home'
import Posts from './containers/Posts'
import PersonalInfo from './containers/PersonalInfo'

function App() {
  return (
    <div className="App">
     
        <Router>
          <Switch>
            <Route path="/" exact component={LogInForm}/>
            <Route path="/home/:email" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/posts" exact component={Posts}/>
            <Route path="/personal" exact component={PersonalInfo}/>
            <Route>404 not found!</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
