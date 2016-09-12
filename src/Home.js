import React, {Component} from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import firebase from './firebase'
import SignIn from './SignIn'
import NavBar from './NavBar'
import UserCards from './UserCards'
import NewContact from './NewContact'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      userName: firebase.auth().currentUser.displayName,
      userCards: []
    }
  }


  render() {
    // const { user } = this.state;
    // if (user) {
      return (
        <div>
          <UserCards userCards={this.state.userCards} />
        </div>
      )
    // return (
    //   <div>
        {/* <section className="sign-in-page">
          <article>
            <SignIn />
          </article> */}
        {/* </section> */}
      // </div>
  //   )
  // }
}
}
export default Home;
