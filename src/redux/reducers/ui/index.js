import { combineReducers } from '@reduxjs/toolkit';
import authenticationInfo from './authentication';

const ui = combineReducers({
	authenticationInfo,
});

export default ui;
