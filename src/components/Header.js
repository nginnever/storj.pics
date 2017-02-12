import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Header = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		return(
			<header className="toolbar toolbar-header" style={{flexDirection:'row' }}>
			    <img src={'storj-logo.png'} style={{height: 30 , marginTop: 0, marginLeft: 5, marginRight: 0}} />
			  <div className="toolbar-actions" style={{marginLeft: 150, marginTop: -35}}>

			    <div className="btn-group pull-right">
			      <button className="btn btn-default pull-right">
			        <span className="icon icon-home pull-right"></span>
			      </button>
			      <button className="btn btn-default pull-right">
			        <span className="icon icon-book pull-right"></span>
			      </button>
				    <button className="btn btn-default pull-right" onClick={this.props.openAccounts}>
				      <span className="icon icon-user pull-right"></span>
				    </button>
			    </div>

			  </div>
			</header>
		)
	}
})