import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import { composeWithDevTools } from 'redux-devtools-extension'

import app from "./app"


const reducers = combineReducers({
	app,
})


export const configureStore = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export const wrapper = createWrapper(configureStore, { debug: true })

