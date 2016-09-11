import React, {Component} from 'react';
import moment from 'moment';
import {AllInfoCard} from './AllInfoCard';
import { IndexLink } from 'react-router'


class UserCard extends Component {

  render(){
    return(
      <div className="user-card">
        <IndexLink to="/allinfo"><button></button></IndexLink>
        <article>{moment(this.props.contact.id).format('L')}</article>
        <img />
        <h1>{this.props.contact.fullName}</h1>
        <h2>{this.props.contact.company}</h2>
      </div>
    )
  }
}

export default UserCard
