import React, {Component} from 'react';
import moment from 'moment';

class UserCard extends Component {

  render(){
    return(
      <div className="user-card">
        <article>{moment(this.props.card.date).format('L')}</article>
        <img />
        <h1>{this.props.card.fullName}</h1>
        <h2>{this.props.card.company}</h2>
      </div>
    )
  }
}

export default UserCard
