import { combineReducers } from 'redux'
import {
  TOGGLE_CONTRIBUTION_TEXT,
  TOGGLE_CONTRIBUTION_ANIMATION,
  TOGGLE_CODE_ANIMATION,
  TOGGLE_DRIBBBLE_ANIMATION,
  SCROLL_TO_SECTION
} from '../actions/action'
const Actions = (
  state = {
    curentContributionText: 'HOOTSUITE',
    currentContributionAnimationState: null,
    animateCode: false,
    animateDribbble: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_CONTRIBUTION_TEXT:
      return Object.assign({}, state, { curentContributionText: action.data })
    case TOGGLE_CONTRIBUTION_ANIMATION:
      return Object.assign({}, state, { currentContributionAnimationState: action.data })
    case TOGGLE_CODE_ANIMATION:
      return Object.assign({}, state, { animateCode: action.data })
    case TOGGLE_DRIBBBLE_ANIMATION:
      return Object.assign({}, state, { animateDribbble: action.data })
    default:
      return state
  }
}
const Scroller = (
  state = {
    currentElInScrollView: null
  },
  action
) => {
  switch (action.type) {
    case SCROLL_TO_SECTION:
      return Object.assign({}, state, { currentElInScrollView: action.data })
    default:
      return state
  }
}

const AppReduce = combineReducers({
  Actions,
  Scroller
})

export default AppReduce
