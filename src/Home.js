import React, {Component} from 'react';
import firebase from './firebase'
import SignIn from './SignIn'
import NavBar from './NavBar'
import UserCards from './UserCards'
import NewContact from './NewContact'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      userName: firebase.auth().currentUser.displayName,
      userCards: [{id: 123, fullName: 'BG'}, {id:420, fullName:'RB'}]
    }
  }

  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user });
  //   });
  // }

  render() {
    // const { user } = this.state;
    // if (user) {
    console.log(this.state.username)

      return (
        <div>
          <NavBar />
          <UserCards userCards={this.state.userCards} />
        </div>
      )
    // return (
    //   <div>
        {/* <section className="sign-in-page">
          <article>
            <SignIn />
          </article> */}
        {/* </section> */}
      // </div>
  //   )
  // }
}
}
export default Home;
