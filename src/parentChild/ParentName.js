import React, { Component } from 'react'
import ChildName from './ChildName'

export default class ParentName extends Component {
    state = {
        firstName : 'iksan',
        lastName : 'iqsan'
    }
  render() {
    return (
      <div>
          <ChildName
          firstName = {this.state.firstName}
          lastName = {this.state.lastName}
          />
      </div>
    )
  }
}
