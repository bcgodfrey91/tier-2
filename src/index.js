import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
const firebase = require('./firebase');
const provider = new firebase.auth.GoogleAuthProvider();
import SignIn from './SignIn'
import App from './App';
require('./css/style');


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root')
)
