'use strict'

import {store} from '../store'
import React from 'react'
import {Dashboard} from '../components/Dashboard'
import {Link} from 'react-router'
import {api} from '../services'

var bucketIds = []
export const DashboardContainer = React.createClass({
	getInitialState: function() {
    // TODO: Make table resizable
    const customStyles = {
      overlay: {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)'
      },
      content: {
        position                   : 'absolute',
        height                     : "299px",
        top                        : '40px',
        left                       : '240px',
        right                      : '40px',
        bottom                     : '40px',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        backgound: '#000'
      }
    }
		return {
      customModalStyles: customStyles,
      bucketRows: [],
      bucketId: '',
			active: '',
      it: 0,
      isOpenAccounts: false
		}
	},
  componentWillMount: function() {
    var _this = this
    store.subscribe(function() {
      var currentStore = store.getState()
      let rand
      var buckets = []
      var bucketIds = []
      console.log(currentStore.bucketsReducer.toJSON())
      for(var i = 0; i < currentStore.bucketsReducer.toJSON().buckets.length; i++) {
       rand = Math.floor(Math.random()*100000000000000000)
       console.log('%%%%%%%%')
       bucketIds.push(currentStore.bucketsReducer.toJSON().buckets[i].id)
       console.log(bucketIds[i])
       buckets.push(
        <Link to={'/buckets/'+bucketIds[i]} className='nav-group-item'  key={rand} onClick={() => _this.setActive()}>
          <span className="icon icon-folder"></span>&nbsp;
           {bucketIds[i]}
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
  setActive: function() {
     api.renderApp()
  },
  createBucket: function(refs, e) {
    e.preventDefault()
    this.closeCreate()
    api.createBucket(refs.name.value).then(() => {
      api.renderApp()
    })
  },
  openCreate: function() {
    var _this = this
    _this.setState({
      isOpenAccounts: true
    })
  },
  closeCreate: function() {
    var _this = this
    _this.setState({
      isOpenAccounts: false
    })
  },
	render: function() {
		return (
      <Dashboard 
        bucketId={this.state.bucketId}
        bucketRows={this.state.bucketRows}
        setActive={this.setActive}
        createBucket = {this.createBucket}
        isOpenAccounts={this.state.isOpenAccounts}
        closeCreate={this.closeCreate} 
        customModalStyles={this.state.customModalStyles} 
        openCreate={this.openCreate} />
		)
	}
})
