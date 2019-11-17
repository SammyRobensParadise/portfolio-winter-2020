import { combineReducers } from 'redux'
import { TOGGLE_CONTRIBUTION_TEXT } from '../actions/action'
const Actions = (state = { curentContributionText: 'HOOTSUITE' }, action) => {
  switch (action.type) {
    case TOGGLE_CONTRIBUTION_TEXT:
      return Object.assign({}, state, { curentContributionText: action.data })
    default:
      return state
  }
}
const AppReduce = combineReducers({
  Actions
})

export default AppReduce
