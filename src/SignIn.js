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
      // Router.browserHistory.push('/home')
    });
  }

  // pushBrowserHistory() {
  //   Router.browserHistory.push('/home')
  // }

  render() {
    const { user } = this.state;
    if (user) {
      // console.log(firebase.auth().currentUser.uid)
      return(
        <section className='signed-in'>
          <div>
            <Link to="/home"><button></button></Link>
          </div>
        </section>
      )
    }
    return (
      <div className='SignIn'>
        <button onClick={() => firebase.auth().signInWithPopup(provider)}>
        Log In With Google</button>
      </div>
    );
  }
}

export default SignIn;
