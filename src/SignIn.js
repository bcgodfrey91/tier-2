import React, {Component} from 'react';
import firebase from './firebase'

const provider = new firebase.auth.GoogleAuthProvider();

class SignIn extends Component {
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
