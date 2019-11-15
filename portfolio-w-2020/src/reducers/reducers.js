export default (state = {}, action) => {
  debugger
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    case 'TRANSITION_TEXT':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
