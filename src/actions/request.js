import api from '../actions/api'

const request = (uri, key, options) => {
  return function (dispatch, getState) {
    if (!uri) {return console.error(`request requires uri`)}
    if (!key) {return console.error(`request requires store key`)}
    dispatch({type: 'api:loading', key})

    return api(uri, options).then(r => {
      return r.json()
    }).then(d => {
      dispatch({type: 'api:yes', key, payload: d})
      return d
    }).catch((e) => {
      dispatch({type: 'api:no', key, error: e})
      throw e
    })
  }
}

export default request
