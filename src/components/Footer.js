import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Footer = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		console.log('unlocked: ' + this.props.unlocked)
		return(
			<footer className="toolbar toolbar-footer">
			  <div className="toolbar-actions">
			  </div>
			</footer>
		)
	}
})