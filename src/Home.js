import React, {Component} from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import firebase from './firebase';
import SignIn from './SignIn';
import NavBar from './NavBar';
import UserCards from './UserCards';
import NewContact from './NewContact';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      userName:  firebase.auth().currentUser.displayName,
      userCards: []
    };
  }


  render() {
      return (
        <section className="contactsScreen">
          <UserCards userCards={this.state.userCards} />
        </section>
      )
    }
}
export default Home;
