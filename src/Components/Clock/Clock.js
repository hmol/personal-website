import React, { Component } from 'react';
import './Clock.scss';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "Fillefrans"};
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      name: "Ballefrans"
    });
  }

    render() {
      return (
        <div>
          <h1>Hello, {this.state.name}!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }

}

export default Clock;

