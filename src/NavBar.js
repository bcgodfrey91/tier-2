import React, {Component} from 'react';
import { Link } from 'react-router'
import {Home} from './Home';
import firebase from './firebase'

class NavBar extends Component {
  render(){
    return(
      <div className="nav-bar">
        <button className="show-favorites">Fav</button>
        <button className="user-name-drop">{firebase.auth().currentUser.displayName}</button>
        <button className="logout hidden"></button>
        <Link to="/addcontact"><button className="add-contact">+</button></Link>
      </div>
    )
  }
}

export default NavBar
