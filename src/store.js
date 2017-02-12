import { createStore, applyMiddleware, combineReducers } from 'redux'
//import thunk from 'redux-thunk'

// add middleware to createStore
//csconst createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import account from './reducers/account'
import files from './reducers/files'
import buckets from './reducers/buckets'
import app from './reducers/app'

const reducers = combineReducers({
  accountReducer: account,
  filesReducer: files,
  bucketsReducer: buckets,
  appReducer: app
  // more
})

const store = createStore(reducers)

export { store }