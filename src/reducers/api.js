const initialState={}
export default (state=initialState, action) => {
  const time = +new Date()
  switch (action.type) {
    case 'api:loading':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: true,
        }
      }
    case 'api:yes':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          error: null,
          body: action.payload,
          time,
        }
      }
    case 'api:no':
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          body: null,
          error: action.error,
          time,
          errors: [{
            error: action.error,
            time,
          }].concat((state[action.key] || {}).errors || []).slice(0, 2),
        }
      }
    case 'api:destroy':
      return initialState
    default:
      return state
  }
}
