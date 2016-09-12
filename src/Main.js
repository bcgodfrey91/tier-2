import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Nav from './NavBar'

class Main extends Component {
  render(){
    return(
      <div>
      <Nav />
      <div>
      {this.props.children}
      </div>
      </div>
    )
  }
}

export default Main
