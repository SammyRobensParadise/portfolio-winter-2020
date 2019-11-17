import { combineReducers } from 'redux'
import { TOGGLE_CONTRIBUTION_TEXT, TOGGLE_CONTRIBUTION_ANIMATION } from '../actions/action'
const Actions = (
  state = { curentContributionText: 'HOOTSUITE', currentContributionAnimationState: null },
  action
) => {
  switch (action.type) {
    case TOGGLE_CONTRIBUTION_TEXT:
      return Object.assign({}, state, { curentContributionText: action.data })
    case TOGGLE_CONTRIBUTION_ANIMATION:
      return Object.assign({}, state, { currentContributionAnimationState: action.data })
    default:
      return state
  }
}
const AppReduce = combineReducers({
  Actions
})

export default AppReduce
