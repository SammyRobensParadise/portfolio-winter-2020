export const TOGGLE_CONTRIBUTION_TEXT = 'TOGGLE_CONTRIBUTION_TEXT'
export const TOGGLE_CONTRIBUTION_ANIMATION = 'TOGGLE_CONTRIBUTION_ANIMATION'

/*
 * action creators
 */

export function toggleContributionText(data) {
  return { type: TOGGLE_CONTRIBUTION_TEXT, data }
}
export function toggleContributionAnimation(data) {
  return { type: TOGGLE_CONTRIBUTION_ANIMATION, data }
}
