import React, {Component} from 'react';
import { Link } from 'react-router'
import UserCard from './UserCard';
import firebase from './firebase'

class UserCards extends Component {
  loadCards() {
    return this.props.userCards.map(card => {
      return(
        <div key={card.id}>
          <UserCard card={card}/>
        </div>
      )
    })
  }

  // get baseContactReference() {
  //   return firebase.database().ref(`baseContact/${this.props.uid}/`);
  // }
  //
  // get allContactInfo() {
  //   return firebase.database().ref(`contactInfo/${this.props.uid}/`);
  // }
  //
  // get allContactNotes() {
  //   return firebase.database().ref(`contactNotes/${this.props.uid}/`)
  // }

  // '/baseContact/' + uid + '/' + uniqueKey + '/' + FullName
  //                                               + Company
  //                                               + Picture
  //                                               + Date.now()
  //                                               + FollowUp Status

  // '/contactInfo/' + uid + '/' + uniqueKey +  '/' + Phone
  //                                                + Email
  //                                                + LinkedIn
  //                                                + Twitter
  //                                                + URL

  // '/contactNotes/' + uid + '/' + uniqueKey + '/' + Notes



  // componentDidMount() {
  //   this.allCardsReference.on('value', (snapshot) => {
  //     console.log('it pushed')
  //   })
  // }

  render(){
    return(
      <div className="user-cards">
        {this.loadCards()}
      </div>
    )
  }
}

export default UserCards


// nameStorage = firebase.storage().ref()
