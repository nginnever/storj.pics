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
			<h3 className="seedcenter"> Served from Storj with love</h3>
       <h4 className="seedcenter">bucket id: {this.props.params.value} </h4>
       <h4 className="seedcenter">file id: {this.props.params.value2}</h4>
       <div className="imgcontain">
       <img className="imgport" src={this.props.url}></img>
       <p className="seedcenter">Share your photo with the url below</p>
       </div>
       <div className="linker">
       <input className="form-control" value={this.props.share}/>
       </div>
       </div>
		)
	}
})
