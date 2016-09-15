import React, {Component} from 'react';
import firebase from './firebase';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import Nav from './NavBar';


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

  handleGoHome(){
    browserHistory.push('/home');
  }

  handleSubmitInfo(e){
    this.addNewContact(e);
    this.handleGoHome();
  }

  render() {
    return (
      <form className='newContact' onSubmit={this.addNewContact}>
        <img className="logo" src="./src/css/images/main-logo.svg" alt="Remembr logo"/>
        <h1 className="addAContact primaryContainer">Add A Contact</h1>
        <section className="nameContainer container">
          <h2 className="nameDescription description ">Full Name: </h2>
          <input
            className='fullNameInput formInput'
            onChange={this.handleFullNameChange}
          />
        </section>
        <section className="companyContainer container">
          <h2 className="companyDescription description">Company: </h2>
          <input
            className='companyNameInput formInput'
            onChange={this.handleCompanyChange}
          />
        </section>
        <h1 className="contactInfoPrimaryContainer primaryContainer">Contact Information</h1>
        <section className="emailContainer container">
          <h2 className="emailDescription description">E-mail: </h2>
          <input
            className='emailInput formInput'
            onChange={this.handleEmailChange}
          />
        </section>
        <section className="phoneContainer container">
          <h2 className="phoneDescription description">Phone: </h2>
          <input
            className='phoneInput formInput'
            onChange={this.handlePhoneChange}
          />
        </section>
        <h1 className="mediaPrimaryContainer primaryContainer">Media Information</h1>
        <section className="linkedinContainer container">
          <h2 className="linkedinDescription description">LinkedIn: </h2>
          <input
            className='linkedinInput formInput'
            onChange={this.handleLinkedinChange}
          />
        </section>
        <section className="twitterContainer container">
          <h2 className="twitterDescription description">Twitter: </h2>
          <input
            className='twitterInput formInput'
            onChange={this.handleTwitterChange}
          />
        </section>
        <section className="urlContainer container">
          <h2 className="urlDescription description">URL: </h2>
          <input
            className='urlInput formInput'
            onChange={this.handleUrlChange}
          />
        </section>
        <h1 className="notePrimaryContainer primaryContainer">Notes</h1>

          <textarea
            className='notesInput'
            onChange={this.handleNotesChange}
          />
        <section className='formButtons'>
          <input
          className="cancelButton buttonz"
          type="button"
          value="Cancel"
          onClick={this.handleGoHome}
          />
          <input
          className="submitButton buttonz"
          type="submit"
          value="New Contact"
          onClick={this.handleSubmitInfo}
          />
        </section>
      </form>
    );
  }

}

export default NewContact
