// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component {
  render() {
    return (
      <div className="keypad">
      <input type="password" onKeyUp={this.entering} ></input>
      </div>
    )

    entering() {
      console.log("Entering password...")
    }
  }

}
