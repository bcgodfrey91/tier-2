import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
const firebase = require('./firebase');
const provider = new firebase.auth.GoogleAuthProvider();
import SignIn from './SignIn'
import App from './App';
import NewContact from './NewContact';
require('./css/style');


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/addcontact" component={NewContact}></Route>

  </Router>,
  document.getElementById('root')
)
