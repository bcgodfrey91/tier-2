import React, {Component} from 'react';
import {Link, Router, IndexRoute, Route, browserHistory } from 'react-router';
import { Home } from './Home';
import firebase from './firebase';

class NavBar extends Component {

  render(){
    return(
      <section className="nav-bar">
        <Link to="/followUp">
          <img src="./src/css/images/star-filled.svg" className="star" />
        </Link>
        <Link to="/home">
          <button className="user-name-drop">{firebase.auth().currentUser.displayName}</button>
        </Link>
        <Link to="/addcontact">
          <button className="plusContact">+</button>
        </Link>
      </section>
    )
  }
}

export default NavBar
