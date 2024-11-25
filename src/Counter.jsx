import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5, // Initial count value
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1, // Increment the count
    });
  };

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button> {/* Button to increase count */}
      </div>
    );
  }
}

export default Counter;

