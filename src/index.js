import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './reducers'
import './index.css'
import Stage from './containers/Stage'
import * as serviceWorker from './serviceWorker'

const Root = () => {
  return(
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Stage />
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
