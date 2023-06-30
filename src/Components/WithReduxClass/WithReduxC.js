import React, { Component } from 'react'
import AC from './AC'
import BC from './BC'
import CC from './CC'

export default class WithReduxC extends Component {
  render() {
    return (
      <div>
        <h1>Redux SampleC</h1>
        <AC/>
        <BC/>
        <CC/>
      </div>
    )
  }
}
