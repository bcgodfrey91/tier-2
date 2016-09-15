import React, {Component} from 'react';
import moment from 'moment';
import {AllInfoCard} from './AllInfoCard';
import { Link } from 'react-router';
import Gravatar from 'react-gravatar';

class UserCard extends Component {

  render(){
    return(
      <section className="userCard" id={this.props.contact.id}>
        <Link
          to={`usercontactinfo/${this.props.contact.id}`}
          className="smallIndividualLink"
        >
          <article className="date">{moment(this.props.contact.id).format('L')}</article>
          <section className="contentCard">
            <Gravatar email={this.props.contact.email} default="monsterid" className="imgOnUserCard"/>
            <article className="basicInfoCard">
              <h1 className="fullNameCard">{this.props.contact.fullName}</h1>
              <h2 className="companyNameCard">{this.props.contact.company}</h2>
            </article>
          </section>
        </Link>
      </section>
    )
  }
}

export default UserCard
