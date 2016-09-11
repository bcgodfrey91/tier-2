import React, {Component} from 'react';
import { Link } from 'react-router'
import UserCard from './UserCard';
import firebase from './firebase'
import NewContact from './NewContact'

class UserCards extends Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
    this.contactsArray = []
  }

  get baseContactReference() {
    return firebase.database().ref(`baseContact/${firebase.auth().currentUser.uid}/`);
  }

  componentDidMount() {
    this.baseContactReference.on('child_added', (snapshot) => {
      const newContactCard = snapshot.val()
      var contactArr = {fullName: newContactCard.fullName, company:newContactCard.company, id: newContactCard.id}

      this.contactsArray.push(contactArr)
      this.setState({ contacts: this.contactsArray })

    })
  }

  componentWillUnmount() {
    this.baseContactReference.off()
  }

  loadCards() {
    return this.state.contacts.map(contact => {
      return(
        <div key={contact.id}>
          <UserCard contact={contact}/>
        </div>
      )
    })
  }




  //
  // get allContactInfo() {
  //   return firebase.database().ref(`contactInfo/${this.props.uid}/`);
  // }
  //
  // get allContactNotes() {
  //   return firebase.database().ref(`contactNotes/${this.props.uid}/`)
  // }

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
