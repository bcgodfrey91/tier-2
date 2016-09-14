import React, {Component} from 'react';
import {Link, Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Home } from './Home';
import firebase from './firebase';

class NavBar extends Component {
  render(){
    return(
      <section className="nav-bar">
        <img src="./src/css/images/star-filled.svg" className="star"/>
        <button className="user-name-drop">{firebase.auth().currentUser.displayName}</button>
        <Link to="/addcontact"><button className="plusContact">+</button></Link>
      </section>
    )
  }
}

export default NavBar
