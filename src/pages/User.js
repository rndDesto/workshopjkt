import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <p>Nama : {this.props.nama}</p>
      </div>
    )
  }
}
