import React, { Component } from 'react'

export default class Order extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
