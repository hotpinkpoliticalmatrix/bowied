import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Root} from './components/root'
import store from './store'

render(
  <Provider store={store}>
    <div>Hello, world!</div>,
    {/* <Root /> */}
  </Provider>,
  document.getElementById('app')
)
