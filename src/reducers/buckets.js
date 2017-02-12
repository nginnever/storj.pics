import {Map} from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'GET_BUCKETS':
    return setState(state, action.buckets)
  }
  // case 'GET_ONLINE':
  //   return setState(state, action.online)
  // }

  return state
}