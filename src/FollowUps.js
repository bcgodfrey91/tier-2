import React, {Component} from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import UserCard from './UserCard';
import firebase from './firebase';
import NewContact from './NewContact';

class FollowUps extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
    this.contactsArray = [];
  }

  get baseContactReference() {
    return firebase.database().ref(`baseContact/${firebase.auth().currentUser.uid}/`);
  }

  componentDidMount() {
    this.baseContactReference.on('child_added', (snapshot) => {
      const newContactCard = snapshot.val();
      var contactArr = {
        fullName: newContactCard.fullName,
        company:newContactCard.company,
        id: newContactCard.id,
        email: newContactCard.email,
        followUp: newContactCard.followUp
      };
      if(contactArr.followUp === 'a'){
        this.contactsArray.push(contactArr);
      }
        this.setState({ contacts: this.contactsArray });
    });
  }

  componentWillUnmount() {
    this.baseContactReference.off();
  }

  loadCards() {
    return this.state.contacts.map(contact => {
      return(
        <div className="contactInfoCard hello" key={contact.id}>
          <UserCard contact={contact} email={contact.email}/>
        </div>
      )
    })
  }

  render(){
    return(
      <div className="userFollowUpCards contactsScreen">
        {this.loadCards()}
      </div>
    )
  }
}

export default FollowUps
