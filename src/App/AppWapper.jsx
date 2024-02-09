import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from '../redux/store/store.js';

const AppWapper = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default AppWapper;
