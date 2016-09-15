import firebase from './firebase';
import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
import UserCard from './UserCard';
import NewContact from './NewContact';


class AllInfoCard extends Component {
  constructor(){
    super();
    this.state = {
      contact: {}
    };
    this.handleFollowUps    = this.handleFollowUps   .bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  get baseContactReference() {
    return firebase.database().ref(`baseContact/${firebase.auth().currentUser.uid}/${this.props.routeParams.id}`);
  }
  get contactInfoReference() {
    return firebase.database().ref(`contactInfo/${firebase.auth().currentUser.uid}/${this.props.routeParams.id}`);
  }

  handleFollowUps(e) {
    e.preventDefault();
    const { fullName,
            company,
            id,
            followUp,
            email
          } = this.state;
    if (this.state.contact.followUp === 0){
      this.baseContactReference.set({ fullName, company, id, followUp: 1, email });
    }else{
      this.baseContactReference.set({ fullName, company, id, followUp: 0, email });
    }
  }

  componentWillMount() {
    const updateState = (snapshot) => {
      this.setState(Object.assign(this.state.contact, snapshot.val()));
    };
    this.baseContactReference.on('value', updateState);
    this.contactInfoReference.on('value', updateState);
  }

  handleDeleteButton(){
    this.baseContactReference.remove();
    this.contactInfoReference.remove();
    browserHistory.push('/home');
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
            <button onClick={this.handleFollowUps}></button>
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
          <h2 className='notes'> {this.state.contact.notes}</h2>
        </article>
        <article className='buttons'>
          <button
          className='delete-button'
          onClick={this.handleDeleteButton}
          >
            Delete
          </button>
        </article>
      </section>
    )
  }

}




export default AllInfoCard;
