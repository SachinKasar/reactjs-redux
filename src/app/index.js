import React from "react";
import {render} from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

import App from "./components/App";
 
const visitorReducer = (state={visitorName:"XYZ", discout:"10000"}, action) => {
	switch (action.type) {
		case 'ADD_VISITOR':
			state = { 
			          ...state,
			          visitorName: action.payload
					};
			break;
		
	}
	return state;
};

const discoutReducer = (state={visitorName:"XYZ", discout:"10000"}, action) => {
	switch (action.type) {
		case 'ADD_DISCOUNT':
			state = { 
			          ...state,
			          discout: action.payload
					};
			break;
		
	}
	return state;
};

const newLogger = (store) => (next) => (action) => {
	console.log("Logger - ", action);
	next(action);
};

const store = createStore(
	combineReducers({visitorReducer,discoutReducer}),
	{},
	applyMiddleware(newLogger) // logger()
	);

 

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);

