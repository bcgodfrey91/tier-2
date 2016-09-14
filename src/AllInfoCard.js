import firebase from './firebase'
import React, {Component} from 'react';
import { Link } from 'react-router'
import UserCard from './UserCard';
import NewContact from './NewContact';


class AllInfoCard extends Component {
  constructor(props){
    super()
    this.state = {
      contact: {}
    }
  }

  get baseContactReference() {
    return firebase.database().ref(`baseContact/${firebase.auth().currentUser.uid}/${this.props.routeParams.id}`);
  }
  get contactInfoReference() {
    return firebase.database().ref(`contactInfo/${firebase.auth().currentUser.uid}/${this.props.routeParams.id}`);
  }

  componentDidMount() {
    const updateState = (snapshot) => {
      this.setState(Object.assign(this.state.contact, snapshot.val()));
    };

    this.baseContactReference.on('value', updateState);
    this.contactInfoReference.on('value', updateState);
  }



  render() {
    return(
      <section className='allContactInfo'>
        <section className='baseContactInfo'>
          <article className='name'>
            <h2 className='baseTitle'>Full Name:</h2>
            <h2 className='fullName'>{this.state.contact.fullName}</h2>
          </article>
          <article className='company'>
            <h2 className='baseTitle'>Company:</h2> <h2 className='companyName'>{this.state.contact.company}</h2>
          </article>
        </section>
        <article className='contactInformation'>
          <h1>Contact Information</h1>
          <h2 className='email'>E-mail: {this.state.contact.email}</h2>
          <h2 className='phone'>Phone: {this.state.contact.phone} </h2>
        </article>
        <article className='webInformation'>
          <h1>Web Information</h1>
          <h2 className='linkedIn'>LinkedIn: {this.state.contact.linkedin} </h2>
          <h2 className='twitter'>Twitter: {this.state.contact.twitter} </h2>
          <h2 className='url'>URL: {this.state.contact.url}</h2>
        </article>
        <article className='contactNotes'>
          <h1>Contact Notes</h1>
          <h2 className='notes' editable> {this.state.contact.notes}</h2>
        </article>
      </section>
    )
  }

}




export default AllInfoCard;
