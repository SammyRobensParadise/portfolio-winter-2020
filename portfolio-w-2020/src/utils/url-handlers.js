import {
  CONTRIBUTION_SECTION,
  PROJECTS_SECTION,
  DESIGN_AND_CODE_SECTION,
  ABOUT_ME_WRAPPER,
} from '../App'
/**
 * Takes a DOM node as a param
 * @param {element} elem
 * @returns {string}
 */
const isInViewport = () => {
  switch (true) {
    case hasElementBeenScrollled(CONTRIBUTION_SECTION) &&
      !hasElementBeenScrollled(PROJECTS_SECTION) &&
      !hasElementBeenScrollled(DESIGN_AND_CODE_SECTION) &&
      !hasElementBeenScrollled(ABOUT_ME_WRAPPER): {
      return CONTRIBUTION_SECTION
    }
    case hasElementBeenScrollled(CONTRIBUTION_SECTION) &&
      hasElementBeenScrollled(PROJECTS_SECTION) &&
      !hasElementBeenScrollled(DESIGN_AND_CODE_SECTION) &&
      !hasElementBeenScrollled(ABOUT_ME_WRAPPER): {
      return PROJECTS_SECTION
    }
    case hasElementBeenScrollled(CONTRIBUTION_SECTION) &&
      hasElementBeenScrollled(PROJECTS_SECTION) &&
      hasElementBeenScrollled(DESIGN_AND_CODE_SECTION) &&
      !hasElementBeenScrollled(ABOUT_ME_WRAPPER): {
      return DESIGN_AND_CODE_SECTION
    }
    case hasElementBeenScrollled(CONTRIBUTION_SECTION) &&
      hasElementBeenScrollled(PROJECTS_SECTION) &&
      hasElementBeenScrollled(DESIGN_AND_CODE_SECTION) &&
      hasElementBeenScrollled(ABOUT_ME_WRAPPER): {
      return ABOUT_ME_WRAPPER
    }
    default: {
      return null
    }
  }
}
/**
 * takes a string id as a param
 * @param {string} id
 * @returns {boolean}
 */
const hasElementBeenScrollled = (id) => {
  let el = document.getElementById(id)
  let rect = el.getBoundingClientRect()
  return rect.top <= 0 ? true : false
}
/**
 * @param {string} scrollNode
 * @returns {URL}
 */
const getExpectedURL = (scrollNode) => {
  const { href, origin } = window.location
  const isCurrentContribution =
    !href.includes(CONTRIBUTION_SECTION) && scrollNode.includes(CONTRIBUTION_SECTION)
  const isCurrentProjects =
    !href.includes(PROJECTS_SECTION) && scrollNode.includes(PROJECTS_SECTION)
  if (scrollNode !== null) {
    switch (true) {
      case isCurrentContribution: {
        return `${origin}#${CONTRIBUTION_SECTION}/`
      }
      case isCurrentProjects: {
        return `${origin}#${PROJECTS_SECTION}/`
      }
    }
  }
}
/**
 * @param {string} URL
 */
const setExpectedURL = (URL) => {
  window.history.pushState({ url: URL }, 'Sammy Robens-Paradise', URL)
}
export { isInViewport, getExpectedURL, setExpectedURL }
