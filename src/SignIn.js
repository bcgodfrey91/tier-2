import React, {Component} from 'react';
import firebase from './firebase';
import { browserHistory, Link, Router } from 'react-router';

const provider = new firebase.auth.GoogleAuthProvider();

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      browserHistory.push('/home');
    });
  }

  render() {
    return (
      <section className='SignIn'>
      <section className='background-opacity'>
        <section className="logoContainer">
          <img className="logo" src="./src/css/images/main-logo.svg" alt="Remembr logo"/>
          <h1 className="logoName">Remembr</h1>
        </section>
        <section className="signInContainer">
          <h2 className="signIn">Log In:</h2>
          <button id="googleButton" onClick={() => firebase.auth().signInWithPopup(provider)}>
          </button>
          </section>
        </section>
      </section>
    );
  }
}

export default SignIn;
