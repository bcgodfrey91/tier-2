import React, {Component} from 'react';
import Example from './Example'

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: "wow"
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({message: "ok"})
  }

  render() {
    return (
      <section>
        <h3>Welcome to React Storage!</h3>
        <article>
          <Example
            handleClick={this.handleClick}
            message={this.state.message}
            anotherProp={"ok"}
          />
        </article>
      </section>
    );
  }
}

export default App
