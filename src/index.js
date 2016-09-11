import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
const firebase = require('./firebase');
const provider = new firebase.auth.GoogleAuthProvider();
import SignIn from './SignIn'
import Home from './Home';
import NewContact from './NewContact';
import AllInfoCard from './AllInfoCard';
require('./css/style');


ReactDOM.render(
  <Router history={browserHistory} path="remembr">
    <Route path="/" component={SignIn}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/addcontact" component={NewContact}></Route>
  </Router>,
  document.getElementById('root')
)
