import { createStore, applyMiddleware, combineReducers } from 'redux'
//import thunk from 'redux-thunk'

// add middleware to createStore
//csconst createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// App Reducers
import account from './reducers/account'
import files from './reducers/files'

const reducers = combineReducers({
  accountReducer: account,
  filesReducer: files
  // more
})

const store = createStore(reducers)

export { store }