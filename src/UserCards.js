import React, {Component} from 'react';
import UserCard from './UserCard';
// import firebase from './firebase'

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

  // get allCardsReference() {
  //     return firebase.database().ref(`all-cards/${this.props.uid}`);
  //   }
  //
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
