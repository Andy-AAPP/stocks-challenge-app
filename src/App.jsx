import React from 'react'
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'

import store from './store/store'
import Root from './navigation/root'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>
  )
}

export default App