export const TOGGLE_CONTRIBUTION_TEXT = 'TOGGLE_CONTRIBUTION_TEXT'
export const TOGGLE_CONTRIBUTION_ANIMATION = 'TOGGLE_CONTRIBUTION_ANIMATION'
export const TOGGLE_CODE_ANIMATION = 'TOGGLE_CODE_ANIMATION'
export const TOGGLE_DRIBBBLE_ANIMATION = 'TOGGLE_DRIBBBLE_ANIMATION'
export const SCROLL_TO_SECTION = 'SCROLL_TO_SECTION'
export const INDEX_PROJECT_FORWARD = 'INDEX_PROJECT_FORWARD'
export const INDEX_PROJECT_BACKWARD = 'INDEX_PROJECT_BACKWARD'
/*
 * action creators
 */

export function toggleContributionText(data) {
  return { type: TOGGLE_CONTRIBUTION_TEXT, data }
}
export function toggleContributionAnimation(data) {
  return { type: TOGGLE_CONTRIBUTION_ANIMATION, data }
}
export function toggleCodeAnimation(data) {
  return { type: TOGGLE_CODE_ANIMATION, data }
}
export function toggleDribbbleAnimation(data) {
  return { type: TOGGLE_DRIBBBLE_ANIMATION, data }
}
export function scrollToSection(data) {
  return { type: SCROLL_TO_SECTION, data }
}
export function indexProjectForward(data) {
  return { type: INDEX_PROJECT_FORWARD, data }
}
export function indexProjectBackward(data) {
  return { type: INDEX_PROJECT_BACKWARD, data }
}
