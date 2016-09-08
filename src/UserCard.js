import React, {Component} from 'react';



class UserCard extends Component {

  render(){
    return(
      <div className="user-card">
        <h1>{this.props.card.fullName}</h1>
      </div>
    )
  }
}

export default UserCard
