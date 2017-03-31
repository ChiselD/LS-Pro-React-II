import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {

// old version
  // constructor(props) {
  //   super(props);
  //   this.updateTime = this.updateTime.bind(this);
  //   let now = new Date();
  //   this.state = {
  //     hr: now.getHours(),
  //     mn: now.getMinutes(),
  //     sc: now.getSeconds()
  //   };
  // }

  constructor(props) {
    super(props);
    this.updateTime = this.updateTime.bind(this);
    this.state = {
      now: new Date()
    };
  }

// old version
  // updateTime() {
  //   this.setState({
  //     hr: this.now.getHours(),
  //     mn: this.now.getMinutes(),
  //     sc: this.now.getSeconds()
  //   });
  // }

  updateTime() {
    this.setState({
      now: new Date()
    });
  }

  componentDidMount() {
    setInterval(this.updateTime, 1000);
  }

  render() {
    return (
      <div className='clock'>
        {this.state.now.toLocaleTimeString()}
      </div>
    )
  }

}
