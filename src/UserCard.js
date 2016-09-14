import React, {Component} from 'react';
import moment from 'moment';
import {AllInfoCard} from './AllInfoCard';
import { Link } from 'react-router';


class UserCard extends Component {


  render(){
    return(
      <section className="userCard" id={this.props.contact.id}>
        <Link to={`usercontactinfo/${this.props.contact.id}`}>
        <article className="date">{moment(this.props.contact.id).format('L')}</article>
        <img className="imageOnUserCard"  alt="User Image"/>
        <h1 className="fullName">{this.props.contact.fullName}</h1>
        <h2 className="companyName">{this.props.contact.company}</h2></Link>
      </section>
    )
  }
}

export default UserCard
