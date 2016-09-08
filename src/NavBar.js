import React, {Component} from 'react';

class NavBar extends Component {
  render(){
    return(
      <div className="nav-bar">
        <button className="show-favorites">Fav</button>
        <button className="user-name-drop">User Name</button>
        <button className="logout hidden"></button>
        <button className="add-contact">+</button>
      </div>
    )
  }
}

export default NavBar
