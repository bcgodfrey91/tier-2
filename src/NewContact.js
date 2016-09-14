import React, {Component} from 'react';
import firebase from './firebase';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';


class NewContact extends Component {
  constructor() {
    super();

    this.state = {
      uid:      firebase.auth().currentUser.uid,
      id:       Date.now(),
      fullName: '',
      company:  '',
      followUp:  0,
      email:    '',
      phone:    '',
      linkedin: '',
      twitter:  '',
      url:      '',
      notes:    '',
    };

    this.handleFullNameChange = this.handleFullNameChange .bind(this);
    this.handleCompanyChange  = this.handleCompanyChange  .bind(this);
    this.handleEmailChange    = this.handleEmailChange    .bind(this);
    this.handlePhoneChange    = this.handlePhoneChange    .bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange .bind(this);
    this.handleTwitterChange  = this.handleTwitterChange  .bind(this);
    this.handleUrlChange      = this.handleUrlChange      .bind(this);
    this.handleNotesChange    = this.handleNotesChange    .bind(this);
    this.addNewContact        = this.addNewContact        .bind(this);
    this.handleSubmitInfo     = this.handleSubmitInfo     .bind(this);
  }


  get baseContactReference() {
    return firebase.database().ref(`baseContact/${this.state.uid}/${this.state.id}`);
  }

  get contactReference() {
    return firebase.database().ref(`contactInfo/${this.state.uid}/${this.state.id}`);
  }


  handleFullNameChange(event) {
    const fullName = event.target.value;
    this.setState({fullName: fullName});
  }

  handleCompanyChange(event) {
    const company = event.target.value;
    this.setState({company: company});
  }

  handleEmailChange(event) {
    const email = event.target.value;
    this.setState({email: email});
  }

  handlePhoneChange(event) {
    const phone = event.target.value;
    this.setState({phone: phone});
  }

  handleLinkedinChange(event) {
    const linkedin = event.target.value;
    this.setState({linkedin: linkedin});
  }

  handleTwitterChange(event) {
    const twitter = event.target.value;
    this.setState({twitter: twitter});
  }

  handleUrlChange(event) {
    const url = event.target.value;
    this.setState({url: url});
  }

  handleNotesChange(event) {
    const notes = event.target.value;
    this.setState({notes: notes});
  }

  addNewContact(e){
    e.preventDefault();

    const { fullName,
            company,
            id,
            followUp,
            email,
            phone,
            linkedin,
            twitter,
            url,
            notes
          } = this.state;


    this.baseContactReference.set({ fullName, company, followUp, id, email });
    this.contactReference.set({ email, phone, linkedin, twitter, url, notes });
    this.setState({ fullName: '', company: '', id: Date.now() });
  }

  handleSubmitInfo(e){
    this.addNewContact(e);
    browserHistory.push('/home');
  }

  render() {
    return (
      <form className='newContact' onSubmit={this.addNewContact}>
        <img className="logo" src="./src/css/images/main-logo.svg" alt="Remembr logo"/>
        <section className="nameContainer">
          <h2 className="nameDescription">Full Name: </h2>
          <input
            className='fullNameInput'
            onChange={this.handleFullNameChange}
          />
        </section>
        <section className="companyContainer">
          <h2 className="companyDescription">Company: </h2>
          <input
            className='companyNameInput'
            onChange={this.handleCompanyChange}
          />
        </section>
        <h1 className="contactInfoPrimaryContainer">Contact Information</h1>
        <section className="emailContainer">
          <h2 className="emailDescription">E-mail: </h2>
          <input
            className='emailInput'
            onChange={this.handleEmailChange}
          />
        </section>
        <section className="phoneContainer">
          <h2 className="phoneDescription">Phone: </h2>
          <input
            className='phoneInput'
            onChange={this.handlePhoneChange}
          />
        </section>
        <h1 className="mediaPrimaryContainer">Media Information</h1>
        <section className="linkedinContainer">
          <h2 className="linkedinDescription">LinkedIn: </h2>
          <input
            className='linkedinInput'
            onChange={this.handleLinkedinChange}
          />
        </section>
        <section className="twitterContainer">
          <h2 className="twitterDescription">Twitter: </h2>
          <input
            className='twitterInput'
            onChange={this.handleTwitterChange}
          />
        </section>
        <section className="urlContainer">
          <h2 className="urlDescription">URL: </h2>
          <input
            className='urlInput'
            onChange={this.handleUrlChange}
          />
        </section>
        <h1 className="notePrimaryContainer">Notes</h1>

          <textarea
            className='notesInput'
            onChange={this.handleNotesChange}
          />

        <input type="submit" value="new contact" onClick={this.handleSubmitInfo} />
      </form>
    );
  }

}

export default NewContact
