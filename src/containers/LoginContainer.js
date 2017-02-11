import {store} from '../store'
import React from 'react'
import {Login} from '../components/Login'

export const LoginContainer = React.createClass({
  componentWillMount: function() {
  },
  createUser: function() {
    alert('New User ID: 0xa8e36383970825dfcc6beb137e802db050bd0d66 Created! This is the public key of your Ethereum address tied to your new p2p identity. Thank you for registering with Just will it.')
  },
  render: function() {
    return (
      <Login createUser={this.createUser} />
    )
  }
})