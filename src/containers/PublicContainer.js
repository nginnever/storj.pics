import React from 'react'
import {Public} from '../components/Public'
import {api} from '../services'
import Img from 'react-image-load';
import 'react-image-load/assets/style.css'

export const PublicContainer = React.createClass({
  getInitialState: function() {
    return {
      url: '',
      share: ""
    }
  },
  componentWillMount: function() {
    api.getData(this.props.params.value, this.props.params.value2).then((data) => {
      console.log('got decrypted data')
      console.log(data)
      var blob = new Blob([data], {type:"image/jpg"})
      //var file = new File(data, "invisible-pogo-stick-cat.jpg", {type:"image/png"});
      this.setState({
        url: window.URL.createObjectURL(blob),
        share: 'http://storj.pics/#/public/'+ this.props.params.value+'/files/'+this.props.params.value2
      })
    })
  },
	render: function() {
		return (
      <Public 
        params={this.props.params} 
        url={this.state.url} 
        share={this.state.share} />
		)
	}
})
