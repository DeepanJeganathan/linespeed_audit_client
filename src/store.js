import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {lineSpeedReducer} from './reducer/lineSpeedReducer'

const store=createStore(lineSpeedReducer, applyMiddleware(thunk))
export default store