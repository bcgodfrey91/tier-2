import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
const firebase = require('./firebase');
const provider = new firebase.auth.GoogleAuthProvider();
import SignIn from './SignIn'
import Home from './Home';
import NewContact from './NewContact';
import AllInfoCard from './AllInfoCard';
import Main from './Main';
require('./css/style');


ReactDOM.render(
  <Router history={browserHistory} path="remembr">
    <Route path="/" component={SignIn}></Route>
    <Route path="/" component={Main} path="home">
      <IndexRoute component={Home} />
      <Route path="/usercontactinfo" component={AllInfoCard} />
    </Route>
    <Route path="/addcontact" component={NewContact}></Route>
  </Router>,
  document.getElementById('root')
)
