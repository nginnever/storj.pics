require('!style!css!sass!../app/sass/photon.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Main} from './components/Main'
import {LoginContainer} from './containers/LoginContainer'
import {FilesContainer} from './containers/FilesContainer'
import {SeedContainer} from './containers/SeedContainer'
import {AccountContainer} from './containers/AccountContainer'
import {BucketContainer} from './containers/BucketContainer'
import {store} from './store'
import {api} from './services'

  
// set routes
const routes = <Route component={Main}>
  <Route path='/' component={LoginContainer} />
  <Route path='/buckets/:value' component={BucketContainer} />
  <Route path='/files' component={FilesContainer} />
  <Route path='/seeding' component={SeedContainer} />
  <Route path='/home' component={AccountContainer} />
</Route>


		ReactDOM.render(
		  <Provider store={store}>
		    <Router history={browserHistory}>{routes}</Router>
		  </Provider>,
		  document.getElementById('app')
		)


//setTimeout(login, 2000)
