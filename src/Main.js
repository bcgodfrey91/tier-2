import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Nav from './NavBar'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      baseId:   null,
      conactId: null
    }
  }

  // get setIdState() {
  //   this.set
  // }

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
