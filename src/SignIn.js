import React, {Component} from 'react';
import firebase from './firebase'
import { browserHistory, Link, Router } from 'react-router'

const provider = new firebase.auth.GoogleAuthProvider();

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      browserHistory.push('/home')
    });
  }

  render() {
    return (
      <div className='SignIn'>
        <button onClick={() => firebase.auth().signInWithPopup(provider)}>
        Log In With Google</button>
      </div>
    );
  }
}

export default SignIn;
