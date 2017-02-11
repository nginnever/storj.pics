import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

export const Login = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return(
      <div>
      <div>
        <h5 className="login-text">
          Welcome to just Will it! Begin by creating an account or selecting <br/> an existing one from the drop down under the user icon.
        </h5>  
      </div>
      <div className="logger">
        <form>
          <div className="form-group">
            <label>User Name</label>
            <input type="name" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <select className="form-control">
            <option>Option one</option>
            <option>Option two</option>
            <option>Option three</option>
            <option>Option four</option>
            <option>Option five</option>
            <option>Option six</option>
            <option>Option seven</option>
            <option>Option eight</option>
          </select>
          <div className="checkbox">
            <label>
              <input type="checkbox" />Ready to take control of my identity and assets via the p2p web!
            </label>
          </div>
          <div className="form-actions">
            <Link to={'/files'} className="btn btn-form btn-primary" onClick={() => this.props.createUser()}>Create New User</Link>
          </div>
        </form>
      </div>
      </div>
    )
  }
})
