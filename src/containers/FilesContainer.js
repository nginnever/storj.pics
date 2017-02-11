'use strict'

import {store} from '../store'
import React from 'react'
import {Files} from '../components/Files'
import {api} from '../services'

export const FilesContainer = React.createClass({
  getInitialState: function() {
  	// TODO: Make table resizable
    var currentStore = store.getState()
    var files = []
    let rand
    //var h = currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].hash
    console.log(currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount])
    for(var i = 0; i < currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files.length; i++) {
    	rand = Math.floor(Math.random()*100000000000000000)
    	files.push(
		    <tr key={rand}>
		      <td style={{width: 150}}><a href={'http://ipfs.io/ipfs/' + currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].hash}>{currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].hash.slice(0, 20) + '...'}</a></td>
		      <td style={{width: 50}}>{currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].name}</td>
          <td>{currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].address.slice(0, 20) + '...'}</td>
		    </tr>
    	)
    }
    return { 
      fileRows: files,
      hash: 'Select File To Create'
      //getSeeds: this.getSeeds()
    }
  },
  componentWillMount: function() {
		var _this = this
		store.subscribe(function() {
      var currentStore = store.getState()
      console.log(currentStore.accountReducer.toJSON().activeAccount)
      var acc
      if (currentStore.accountReducer.toJSON().activeAccount === undefined) {
        acc = 0
      } else {
        acc = currentStore.accountReducer.toJSON().activeAccount
      }
      // console.log(currentStore.filesReducer.toJSON().user)
      // console.log(currentStore.filesReducer.toJSON().user[acc])
      
      // this wont load the other accounts ipfs hash from the contract
      // when switching accounts since it has an object from the first accounts
      // view of the data.
      // solution don't store the user object as an array for each account,
      // only have the contract map to ipfs hashes that represent that account alone
      if (currentStore.filesReducer.toJSON().user[acc] === undefined) {
        api.getInitFile(acc, currentStore.filesReducer.toJSON().user)
        return
      }

      var files = []
      let rand
      //var h = currentStore.filesReducer.toJSON().user[acc].files[i].hash

      for(var i = 0; i < currentStore.filesReducer.toJSON().user[acc].files.length; i++) {
        rand = Math.floor(Math.random()*100000000000000000)
        files.push(
          <tr key={rand}>
            <td style={{width: 150}}><a href={'http://ipfs.io/ipfs/' + currentStore.filesReducer.toJSON().user[acc].files[i].hash}>{currentStore.filesReducer.toJSON().user[acc].files[i].hash.slice(0, 20) + '...'}</a></td>
            <td style={{width: 50}}>{currentStore.filesReducer.toJSON().user[acc].files[i].name}</td>
            <td>{currentStore.filesReducer.toJSON().user[acc].files[i].address.slice(0, 20) + '...'}</td>
          </tr>
        )
      }


			_this.setState({
				balance: currentStore.accountReducer.toJSON().balance,
				activeAccount: currentStore.accountReducer.toJSON().activeAccount,
        fileRows: files
			})
		})
  },
  // getSeeds: function(addy) {
  //   api.getSeeds(addy).then((seeders) => {
  //     console.log(seeders)
  //     return seeders
  //   })
  // },
  getFile: function(file) {
    console.log(file)
    const f = file.files[0]
    console.log(f)
    api.getFile(f).then((hash) => {
      console.log(hash)
      console.log(file)
      this.setState({
        hash: hash,
        file: file
      })
    })
    // let reader = new FileReader()
    // reader.onloadend = () => {
    //   api.getFile(reader)
    // }
    // reader.readAsArrayBuffer(f)
  },
  upload: function(value) {
    console.log(value.value)
    api.upload(this.state.hash, value.value, this.state.activeAccount, this.state.file.files[0].name)
  },
	render: function() {
		return (
      <Files 
        fileRows={this.state.fileRows}
        hash={this.state.hash}
        getFile={this.getFile} 
        upload={this.upload} />
		)
	}
})
