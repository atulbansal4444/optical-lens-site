import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import data from '../reducers/data';
import ui from '../reducers/ui';

const reducer = combineReducers({
	data,
	ui,
});

export const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
