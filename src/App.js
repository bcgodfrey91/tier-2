import React, {Component} from 'react';
import firebase from './firebase'
import SignIn from './SignIn'
import NavBar from './NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
}

  render() {
    const { user } = this.state;
    // if (user) {};
    return (
      <div>
      <NavBar />
      <section className="sign-in-page">
        <h3>Remembr</h3>
        <article>
          <SignIn />
        </article>
      </section>
      </div>
    );
  }
}

export default App;
