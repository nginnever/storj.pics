import React from 'react'
import {Bucket} from '../components/Bucket'
import {store} from '../store'
import {api} from '../services'
import {Link} from 'react-router'

var idState = ''

export const BucketContainer = React.createClass({
  getInitialState: function() {
    return {
      pictures: [],
      idState: '',
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
        var fileId = currentStore.filesReducer.toJSON().pictures[i].id
        rand = Math.floor(Math.random()*100000000000000000)
        pictures.push(
          <tr key={rand}>
            <td style={{width: 150}}><Link to={'/public/'+idState+'/files/'+fileId}>{fileId.slice(0, 20) + '...'}</Link></td>
            <td style={{width: 50}}>{currentStore.filesReducer.toJSON().pictures[i].filename}</td>
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
    //api.getFiles(this.props.params.value)
  },
  renderPics: function(id){
    console.log('RENDER PICS!!!')
    console.log(idState)


    if(id !== idState) {
      console.log(id)
      console.log(this.props.params.value)
      console.log('_________')
      api.getFiles(id)
      idState = id
    }
    
  },
  uploadPicture: function(picture, id) {
    console.log(picture.files)
    api.uploadPicture(picture.files, id).then((res) =>{
      api.getFiles(id)
    })
  },
  makePublic: function(id) {
    console.log(id)
    api.makePublic(id).then((res) => {
      alert(res)
    })
  },
  render: function() {
    return (
      <Bucket 
        params={this.props.params}
        renderPics={this.renderPics}
        pictures={this.state.pictures}
        uploadPicture={this.uploadPicture}
        makePublic={this.makePublic} />
    )
  }
})
