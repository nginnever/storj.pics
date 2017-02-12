import {store} from '../store'
import React from 'react'
import {Main} from '../components/Main'
import {Dashboard} from '../components/Dashboard'
import {api} from '../services'
import { hashHistory } from 'react-router'

export const LoginContainer = React.createClass({
  getInitialState: function() {
    return {
     clicked: false
    }
    return null
  },
  componentWillMount: function() {
  },
  login: function(refs, evt) {
    evt.preventDefault()
    console.log(refs.email.value)
    api.renderApp().then(()=>{
      api.login()
      hashHistory.push('/home')
    })
  },
  render: function() {
    return (
      <div>
        <div className="storj-login">
          <img src={'logo-blue.svg'} style={{height: 65, marginLeft: 5, marginRight: 0}} />
          <div style={{marginLeft:145, marginTop:-101}}>
            <h1>Pics</h1>
          </div>
          <br/>
          <div className="dash-box">

            <form className="login-form">
              <div className="form-group">
                <label>Email address</label>
                <input ref="email" type="name" size="30" className="form-control" placeholder="Email"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input ref="pass" type="password" size="40" className="form-control" placeholder="Password"/>
              </div>
              <hr></hr>
              <div className="form-group">
                <label>Or Enter Private Key</label>
                <input ref="key" type="password" size="40" className="form-control" placeholder="ECDSA Private Key String"/>
              </div>
              <div className="form-actions">
                <button type="submit" onClick={(evt) => this.login(this.refs, evt)}>Login</button>
                <h4 className="pull-right" style={{marginTop:0}}>Register at <a href="https://storj.io">storj,io</a></h4>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
})