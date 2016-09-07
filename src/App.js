import React, {Component} from 'react';
import Example from './Example'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    
  }

  render() {
    return (
      <section>
        <h3>Remembr</h3>
        <article>
          <Example
            handleClick={this.handleClick}
          />
        </article>
      </section>
    );
  }
}

export default App;
