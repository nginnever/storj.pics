import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'
import Modal from 'react-modal'

export const Dashboard = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		return(
      <div className="pane-sm sidebar">
			<nav className="nav-group">
			  <h1 className="nav-group-title" style={{fontSize:14}}>Photo Buckets
			  <span className="icon icon-plus-squared" style={{marginLeft:10}} onClick={() => this.props.openCreate()}></span></h1> 

				    <Modal className="accounts-modal pull-right"
			      style={this.props.customModalStyles}
			      isOpen={this.props.isOpenAccounts}
			      onRequestClose={this.props.closeAccounts}
			      contentLabel="Modal" >

						<form>
						  <div className="form-group">
						    <label>Bucket Name</label>
						    <input ref="name" type="name" className="form-control" placeholder="Name" />
						  </div>
						  <div className="form-group">
						    <label>Storage</label>
						    <input ref="storage" type="name" className="form-control" placeholder="Storage" />
						  </div>
						   <div className="form-group">
						    <label>Transfer</label>
						    <input ref="transfer" type="name" className="form-control" placeholder="Transfer" />
						  </div>
						  <div className="form-actions">
						    <button type="submit" onClick={() => this.props.closeCreate()}>Cancel</button>
						    <button type="submit" onClick={(evt) => this.props.createBucket(this.refs, evt)}>OK</button>
						  </div>
						</form>
			    </Modal>
			    <div>
			    {this.props.bucketRows}
			    </div>
			</nav>
			</div>
		)
	}
})