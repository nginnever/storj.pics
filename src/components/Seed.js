import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Seed = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		return(
			<div>

			<table className="table-striped-seed">
			  <thead>
			    <tr>
			      <th>Asset</th>
			      <th>Owner</th>
			      <th>Value</th>
			    </tr>
			  </thead>
			  <tbody>
			    {this.props.chunks}
			  </tbody>
			</table>
			</div>
		)
	}
})
