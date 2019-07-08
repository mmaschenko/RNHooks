import * as mainAction from '../actions/main'

/* HEAVILY borrowed from redux/bindActionCreators
    important: first parameter given to actions is payload, second is dispatch
*/
const bindDispatchToActions = (actions, dispatch) => {
  const mappedActions = {}
  for (let key in actions) {
    const action = actions[key]
    if (typeof action === 'function') {
      if (action instanceof Promise) {
        mappedActions[key] = function(payload = {}) {
          return action(payload, dispatch)
        }
      } else {
        mappedActions[key] = function(params) {
          return dispatch(action.apply(this, [params, dispatch]))
        }
      }
    }
  }
  return mappedActions
}




function getRootActions(dispatch) {
  return {
    // auth: bindDispatchToActions(authActions, dispatch)
    main: bindDispatchToActions(mainAction, dispatch)
  }
}
export default getRootActions