// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.component {
  render() {
    return(
      <div>
      <button onFocus={this.good} onBlur={this.hey}/>
      </div>
    )
  }
}
