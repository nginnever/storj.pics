'use strict'

import {store} from '../store'
import React from 'react'
import {Dashboard} from '../components/Dashboard'
import {Link} from 'react-router'

export const DashboardContainer = React.createClass({
	getInitialState: function() {
    // TODO: Make table resizable
		return {
      bucketRows: [],
      bucketId: '',
			active: '',
      it: 0
		}
	},
  componentWillMount: function() {
    var _this = this
    store.subscribe(function() {
      var currentStore = store.getState()
      let rand
      var buckets = []

      // if (currentStore.bucketsReducer.toJSON().buckets === undefined) {
      //   return
      // }
      // if(currentStore.bucketsReducer.toJSON().buckets[currentStore.bucketsReducer.toJSON().buckets.length].it === _this.state.it) {
      //   //api.getInitFile(acc, currentStore.filesReducer.toJSON().user)
      //   return
      // }
      //var h = currentStore.filesReducer.toJSON().user[currentStore.accountReducer.toJSON().activeAccount].files[i].hash
      console.log(currentStore.bucketsReducer.toJSON())
      for(var i = 0; i < currentStore.bucketsReducer.toJSON().buckets.length; i++) {
       rand = Math.floor(Math.random()*100000000000000000)
       var bucketId = currentStore.bucketsReducer.toJSON().buckets[i].id
       _this.setState({
         [bucketId]: 'nav-group-item'
       })
       buckets.push(
        <Link to={'/buckets/'+bucketId} className={_this.state.bucketId}  key={rand} onClick={() => _this.setActive(bucketId)}>
          <span className="icon icon-folder"></span>&nbsp;
           {bucketId}
        </Link>
       )
       buckets.push(<br key={Math.floor(Math.random()*100000000000000000)}></br>)

      }
      //returnObj.push(active: '')
     _this.setState({
        bucketRows: buckets,
        //it: currentStore.bucketsReducer.toJSON().buckets[currentStore.bucketsReducer.toJSON().buckets.length].it
     })
    })
  },
  setActive: function(selected) {
  	if (selected === this.state.active) {
      return
    }
  	var _this = this
  	_this.setState({
  		[selected]: 'nav-group-item active',
  		[this.state.active]: 'nav-group-item',
  		active: selected
  	})
  },
  createBucket: function() {
    alert('creating new bucket!')
  },
	render: function() {
		return (
      <Dashboard 
        bucketId={this.state.bucketId}
        bucketRows={this.state.bucketRows}
        setActive={this.setActive}
        createBucket = {this.createBucket} />
		)
	}
})
