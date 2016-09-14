import firebase from './firebase';
import React, {Component} from 'react';
import { Link } from 'react-router';
import UserCard from './UserCard';
import NewContact from './NewContact';


class AllInfoCard extends Component {
  constructor(){
    super();
    this.state = {
      contact: {}
    };
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
    // console.log(this.baseContactReference)
    // console.log(snapshot.val())
    return(
      <div className='all-contact-info' >
        <h1>Full Name: {this.state.contact.fullName} </h1>
        <h1>Company: {this.state.contact.company} </h1>
        <h1>E-mail: {this.state.contact.email}</h1>
        <h1>Phone: {this.state.contact.phone} </h1>
        <h1>LinkedIn:{this.state.contact.linkedin} </h1>
        <h1>Twitter: {this.state.contact.twitter} </h1>
        <h1>URL: {this.state.contact.url}</h1>
        <h1>Notes: {this.state.contact.notes} </h1>
      </div>
    )
  }

}




export default AllInfoCard;
