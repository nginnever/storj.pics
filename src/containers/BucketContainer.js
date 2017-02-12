import React from 'react'
import {Bucket} from '../components/Bucket'
import {store} from '../store'
import {api} from '../services'

export const BucketContainer = React.createClass({
  getInitialState: function() {
    //api.getFiles()
    return {
      pictures: []
    }
  },
  componentWillMount: function() {
    var _this = this
    store.subscribe(function() {
      var currentStore = store.getState()
      console.log('weeeeee')
      console.log(currentStore.filesReducer.toJSON().pictures)
      if (currentStore.filesReducer.toJSON().pictures === undefined) {
        //api.getInitFile(acc, currentStore.filesReducer.toJSON().user)
        return
      }

      var pictures = []
      let rand
      //var h = currentStore.filesReducer.toJSON().user[acc].files[i].hash

      for(var i = 0; i < currentStore.filesReducer.toJSON().pictures.length; i++) {
        rand = Math.floor(Math.random()*100000000000000000)
        pictures.push(
          <tr key={rand}>
            <td style={{width: 150}}><a href={'http://ipfs.io/ipfs/' + currentStore.filesReducer.toJSON().pictures[i].id}>{currentStore.filesReducer.toJSON().pictures[i].id.slice(0, 20) + '...'}</a></td>
            <td style={{width: 50}}>{currentStore.filesReducer.toJSON().pictures[i].name}</td>
            <td>{currentStore.filesReducer.toJSON().pictures[i].size}</td>
          </tr>
        )
      }


       _this.setState({
          pictures: pictures
       })
    })
  },
  componentDidMount: function() {
    api.getFiles()
  },
  uploadPicture: function(picture) {
    alert(picture)
  },
  makePublic: function() {
    alert('makePublic')
  },
  render: function() {
    return (
      <Bucket 
        params={this.props.params} 
        pictures={this.state.pictures}
        uploadPicture={this.uploadPicture}
        makePublic={this.makePublic} />
    )
  }
})
