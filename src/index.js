require('!style!css!sass!../app/sass/photon.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Main} from './components/Main'
import {LoginContainer} from './containers/LoginContainer'
import {FilesContainer} from './containers/FilesContainer'
import {PublicContainer} from './containers/PublicContainer'
import {HomeContainer} from './containers/HomeContainer'
import {BucketContainer} from './containers/BucketContainer'
import {store} from './store'
import {api} from './services'

  
// set routes
const routes = <Route component={Main}>
  <Route path='/' component={LoginContainer} />
  <Route path='/buckets/:value' component={BucketContainer} />
  <Route path='/files' component={FilesContainer} />
  <Route path='/home' component={HomeContainer} />
  <Route path='/public/:value/files/:value2' component={PublicContainer} />
</Route>


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
)
