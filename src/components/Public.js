import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {api} from '../services'

export const Public = React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount: function() {

  },
	render: function() {
		return(
      <div>
			<h3 className="seedcenter"> Served from Storj with love
       <br/>bucket id: {this.props.params.value} 
       <br/>file id: {this.props.params.value2}</h3>
       <div className="imgcontain">
       <img className="imgport" src={this.props.url}></img>
       </div>
       </div>
		)
	}
})
