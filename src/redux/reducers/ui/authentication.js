import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'authenticationInfo',
	initialState: {
		loggerIn: false,
		userInfo: {},
	},
	reducerPath: 'authentication',
	reducers: {},
});

export default authSlice.reducer;
