export const TOGGLE_CONTRIBUTION_TEXT = 'TOGGLE_CONTRIBUTION_TEXT'
export const TOGGLE_CONTRIBUTION_ANIMATION = 'TOGGLE_CONTRIBUTION_ANIMATION'
export const TOGGLE_CODE_ANIMATION = 'TOGGLE_CODE_ANIMATION'
export const TOGGLE_DRIBBBLE_ANIMATION = 'TOGGLE_DRIBBBLE_ANIMATION'
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
