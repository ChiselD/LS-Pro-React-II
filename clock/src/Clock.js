import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {

  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
    let now = new Date();
    this.state = {
      hr: now.getHours(),
      mn: now.getMinutes(),
      sc: now.getSeconds()
    };
  }

  updateTime() {
    this.setState({
      hr: this.now.getHours(),
      mn: this.now.getMinutes(),
      sc: this.now.getSeconds()
    });
  }

  changeTime() {
    setInterval(this.updateTime, 1000);
  }

  render() {
    return (
      <div className='clock'>
        {this.state.hr}:{this.state.mn}:{this.state.sc}
      </div>
    )
  }
}
