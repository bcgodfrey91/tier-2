import React, {Component} from 'react';
import firebase from './firebase'
import SignIn from './SignIn'
import NavBar from './NavBar'
import UserCards from './UserCards'


class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      userCards: [{id: 123, fullName: 'BG'}, {id:420, fullName:'RB'}]
    }
}

  render() {
    const { user } = this.state;
    // if (user) {};
    return (
      <div>
        <NavBar /* will need username and logout */ />
        <UserCards userCards={this.state.userCards} />
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
