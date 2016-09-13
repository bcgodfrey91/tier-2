import React, {Component} from 'react';
import moment from 'moment';
import {AllInfoCard} from './AllInfoCard';
import { Link } from 'react-router'


class UserCard extends Component {

  render(){
    return(
      <div className="user-card" id={this.props.contact.id}>
        <Link to="usercontactinfo"><button></button>
        <article>{moment(this.props.contact.id).format('L')}</article>
        <img />
        <h1>{this.props.contact.fullName}</h1>
        <h2>{this.props.contact.company}</h2></Link>
      </div>
    )
  }
}

export default UserCard
