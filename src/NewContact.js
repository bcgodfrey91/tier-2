import React, {Component} from 'react';
import firebase from './firebase';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';


class NewContact extends Component {
  constructor() {
    super()

    this.state = {
      uid: firebase.auth().currentUser.uid,
      id: Date.now(),
      fullName: '',
      company: '',
      followUp: 0,
      email: '',
      phone: '',
      linkedin:'',
      twitter:'',
      url:'',
      notes:'',
    }

    this.handleFullNameChange = this.handleFullNameChange.bind(this)
    this.handleCompanyChange = this.handleCompanyChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this)
    this.handleTwitterChange = this.handleTwitterChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
    this.addNewContact = this.addNewContact.bind(this)
  }


  get baseContactReference() {
    return firebase.database().ref(`baseContact/${this.state.uid}/${this.state.id}`);
  }

  get contactReference() {
    return firebase.database().ref(`contactInfo/${this.state.uid}/${this.state.id}`);
  }


  handleFullNameChange(event) {
    const fullName = event.target.value
    this.setState({fullName: fullName})
  }

  handleCompanyChange(event) {
    const company = event.target.value
    this.setState({company: company})
  }

  handleEmailChange(event) {
    const email = event.target.value
    this.setState({email: email})
  }

  handlePhoneChange(event) {
    const phone = event.target.value
    this.setState({phone: phone})
  }

  handleLinkedinChange(event) {
    const linkedin = event.target.value
    this.setState({linkedin: linkedin})
  }

  handleTwitterChange(event) {
    const twitter = event.target.value
    this.setState({twitter: twitter})
  }

  handleUrlChange(event) {
    const url = event.target.value
    this.setState({url: url})
  }

  handleNotesChange(event) {
    const notes = event.target.value
    this.setState({notes: notes})
  }

  addNewContact(e){
    e.preventDefault();

    const { baseContactReference } = this.props;
    const { fullName } = this.state;
    const { contactInfo } = this.props;
    const { company } = this.state;
    const { id } = this.state;
    const { followUp } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    const { linkedin } = this.state;
    const { twitter } = this.state;
    const { url } = this.state;
    const { notes } = this.state;


    this.baseContactReference.set({ fullName, company, followUp, id });
    this.contactReference.set({ email, phone, linkedin, twitter, url, notes});
    this.setState({ fullName: '', company: '', id: Date.now() })

  }



  render() {
    return (
      <form className='new-contact' onSubmit={this.addNewContact}>
        <h1>Full Name: </h1>
          <input
            className='full-name'
            onChange={this.handleFullNameChange}
          />
        <h1>Company: </h1>
          <input
            className='company-name'
            onChange={this.handleCompanyChange}
          />
        <h1>E-mail: </h1>
          <input
            className='email'
            onChange={this.handleEmailChange}
          />
        <h1>Phone: </h1>
          <input
            className='primary-phone'
            onChange={this.handlePhoneChange}
          />
        <h1>LinkedIn: </h1>
          <input
            className='linkedin'
            onChange={this.handleLinkedinChange}
          />
        <h1>Twitter: </h1>
          <input
            className='twitter'
            onChange={this.handleTwitterChange}
          />
        <h1>URL: </h1>
          <input
            className='url'
            onChange={this.handleUrlChange}
          />
        <h1>Notes: </h1>
          <textarea
            className='notes'
            onChange={this.handleNotesChange}
          />
        <input type="submit" value="new contact" />
      </form>
    );
  }

}

export default NewContact
