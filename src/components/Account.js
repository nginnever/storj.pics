import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export const Account = React.createClass({
  mixins: [PureRenderMixin],
	render: function() {
		return(
			<h1 className="seedcenter"> Welcome to Storj Pics!! 
       <br/>{this.props.params.value} 
       <br/>{this.props.params.value2}</h1>
		)
	}
})
