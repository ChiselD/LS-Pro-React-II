import React, { Component } from 'react';
import './Clock.css';

export default class Clock extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const now = new Date();
    let hr = now.getHours();
    let mn = now.getMinutes();
    let sc = now.getSeconds();

    return (
      <div className='clock'>
        {hr}:{mn}:{sc}
      </div>
    )
  }
}
