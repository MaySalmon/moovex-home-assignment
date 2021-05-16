import React from 'react';
import './App.css';
import Header from './containers/Header'
import LogInForm from './containers/LogInForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from './containers/Home'
import Posts from './containers/Posts'

function App() {
  return (
    <div className="App">
     
        <Router>
          <Switch>
            <Route path="/" exact component={LogInForm}/>
            <Route path="/home/:email" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/posts/:id" exact component={Posts}/>
            <Route>404 not found!</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
