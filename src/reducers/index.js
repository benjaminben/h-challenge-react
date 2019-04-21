import logger from 'redux-logger'
import thunk  from 'redux-thunk'
import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux'

import api      from './api'
import vehicles from './vehicles'

// Allow support of actions with asynchronous results in the future
const middleware = [thunk]

// In dev, open js console to see all state changes
if( process.env.NODE_ENV !== 'production' ) {
  middleware.push(logger)
}

const reducers = combineReducers({
  api,
  vehicles,
})

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middleware))
)

export default store
