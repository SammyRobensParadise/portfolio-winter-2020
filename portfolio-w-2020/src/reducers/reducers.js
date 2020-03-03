import { combineReducers } from 'redux'
import {
  TOGGLE_CONTRIBUTION_TEXT,
  TOGGLE_CONTRIBUTION_ANIMATION,
  TOGGLE_CODE_ANIMATION,
  TOGGLE_DRIBBBLE_ANIMATION,
  SCROLL_TO_SECTION,
  INDEX_PROJECT_BACKWARD,
  INDEX_PROJECT_FORWARD,
} from '../actions/action'

const Actions = (
  state = {
    curentContributionText: 'HOOTSUITE',
    currentContributionAnimationState: null,
    animateCode: false,
    animateDribbble: false,
  },
  action,
) => {
  switch (action.type) {
    case TOGGLE_CONTRIBUTION_TEXT:
      return { ...state, curentContributionText: action.data }
    case TOGGLE_CONTRIBUTION_ANIMATION:
      return { ...state, currentContributionAnimationState: action.data }
    case TOGGLE_CODE_ANIMATION:
      return { ...state, animateCode: action.data }
    case TOGGLE_DRIBBBLE_ANIMATION:
      return { ...state, animateDribbble: action.data }
    default:
      return state
  }
}
const Scroller = (
  state = {
    currentElInScrollView: null,
  },
  action,
) => {
  switch (action.type) {
    case SCROLL_TO_SECTION:
      return { ...state, currentElInScrollView: action.data }
    default:
      return state
  }
}

const Projects = (
  state = {
    projectToDisplay: 0,
  },
  action,
) => {
  switch (action.type) {
    case INDEX_PROJECT_FORWARD:
      if (action.data.currentIndex === action.data.listLength - 1) {
        return { ...state, projectToDisplay: 0 }
      }
      return { ...state, projectToDisplay: action.data.currentIndex + 1 }
    case INDEX_PROJECT_BACKWARD:
      if (action.data.currentIndex === 0) {
        return { ...state, projectToDisplay: action.data.listLength - 1 }
      }
      return { ...state, projectToDisplay: action.data.currentIndex - 1 }
    default:
      return state
  }
}

const AppReduce = combineReducers({
  Actions,
  Scroller,
  Projects,
})

export default AppReduce
