import React, {Component} from 'react';
import firebase from './firebase'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null;
    }
}

  render() {
    const { user } = this.state;
    // if (user) {};
    return (
      <section className="sign-in-page">
        <h3>Remembr</h3>
        <article>
          <SignIn />
        </article>
      </section>
    );
  }
}

export default App;
