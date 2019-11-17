/*export const simpleAction = result => {
  return {
    type: 'SIMPLE_ACTION',
    payload: result
  }
}
export const tansitionContributionTest = result => {
  return {
    type: 'TRANSITION_TEXT',
    payload: result
  }
} */
/*
 * action types
 */

export const TOGGLE_CONTRIBUTION_TEXT = 'TOGGLE_CONTRIBUTION_TEXT'


/*
 * other constants
 */


/*
 * action creators
 */

export function toggleContributionText(data) {
  return { type: TOGGLE_CONTRIBUTION_TEXT, data }
}

