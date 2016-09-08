import React, {Component} from 'react';
import UserCard from './UserCard'

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

  render(){
    return(
      <div className="user-cards">
        {this.loadCards()}
      </div>
    )
  }
}

export default UserCards
