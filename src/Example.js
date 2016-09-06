import React, {Component} from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h3>Example!</h3>
        <h4>{this.props.message}</h4>
        <h5>{this.props.anotherProp}</h5>
        <button
          onClick={this.props.handleClick}
        >
          Update Message
        </button>
      </div>
    );
  }
}

export default Example
