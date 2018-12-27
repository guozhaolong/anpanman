import React from 'react'
import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import asset from './models/asset'
import user from './models/user'

const app = dva({
  initialState: {},
  models: [asset,user],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
})

const App = app.start(<Router />)

export default () => <App />
