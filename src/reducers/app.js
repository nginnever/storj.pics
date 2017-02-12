import {Map} from 'immutable'

function setState(state, newState) {
  return state.merge(newState)
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'RENDER':
    console.log(action)
    return setState(state, action.showApp)
  }
  // case 'GET_ONLINE':
  //   return setState(state, action.online)
  // }

  return state
}