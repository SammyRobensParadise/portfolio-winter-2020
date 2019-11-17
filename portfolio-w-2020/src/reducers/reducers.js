import { combineReducers } from 'redux'
import { TOGGLE_CONTRIBUTION_TEXT } from '../actions/action'

const Actions = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_CONTRIBUTION_TEXT:
      debugger
      return Object.assign(state,action.data)
    default:
      return state
  }
}
const AppReduce = combineReducers({
  Actions
})

export default AppReduce
