import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// console.log(rootReducer)

// const store = createStore(rootReducer,composeWithDevTools(
const store = createStore(rootReducer,composeEnhancer(
  applyMiddleware(thunk)
))

export default store