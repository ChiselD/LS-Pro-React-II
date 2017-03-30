import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.incrementTime = this.incrementTime.bind(this);
    const now = new Date();
    this.state = {
      hr: now.getHours(),
      mn: now.getMinutes(),
      sc: now.getSeconds()
    };
  }

  incrementTime() {
    this.setState({
      now: new Date()
    });
  }

  changeTime() {
    setInterval(this.incrementTime, 1000);
  }

  render() {
    return (
      <div className='clock'>
        {this.state.hr}:{this.state.mn}:{this.state.sc}
      </div>
    )
  }
}
