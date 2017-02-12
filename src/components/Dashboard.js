import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

export const Dashboard = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		return(
      <div className="pane-sm sidebar">
			<nav className="nav-group">
			  <h1 className="nav-group-title" style={{fontSize:14}}>Photo Buckets
			  <span className="icon icon-plus-squared" style={{marginLeft:10}} onClick={() => this.props.createBucket()}></span></h1> 
			  {this.props.bucketRows}
			</nav>
			</div>
		)
	}
})