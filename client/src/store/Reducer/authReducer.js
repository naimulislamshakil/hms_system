/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseUrl = 'http://localhost:5000';

export const singup = createAsyncThunk(
	'auth/singup',
	async (info, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.post(`${baseUrl}/user/singup`, info);

			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async (info, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.post(`${baseUrl}/user/login`, info);
			localStorage.setItem('accessToken', data.token);
			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const persist = createAsyncThunk(
	'auth/persist',
	async (token=1, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.get(`${baseUrl}/user/persist`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${token}`,
				},
			});

			

			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const authReducer = createSlice({
	name: 'slice',
	initialState: {
		user: {},
		error: null,
		loading: false,
		message: '',
		token: '',
		code: null,
	},
	reducers: {
		messageClear: (state, _) => {
			state.error = null;
			state.message = '';
			state.code = null;
		},
	},
	extraReducers: {
		[singup.pending]: (state) => {
			state.loading = true;
		},
		[singup.fulfilled]: (state, { payload }) => {
			state.error = null;
			state.loading = false;
			state.message = payload.message;
			state.code = payload.status;
		},
		[singup.rejected]: (state, { payload }) => {
			state.error = payload.message;
			state.loading = false;
			state.message = '';
			state.code = payload.status;
		},

		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.error = null;
			state.loading = false;
			state.message = payload.message;
			state.code = payload.status;
			state.token = payload.token;
		},
		[login.rejected]: (state, { payload }) => {
			state.error = payload.error;
			state.loading = false;
			state.message = payload.message;
			state.code = payload.status;

			state.token = '';
		},

		[persist.pending]: (state) => {
			state.loading = true;
		},

		[persist.fulfilled]: (state, { payload }) => {
			state.error = null;
			state.loading = false;
			state.code = payload.status;
			state.user = payload.user;
		},

		[persist.rejected]: (state, { payload }) => {
			state.error = payload.error;
			state.loading = false;
			state.message = payload.message;
			state.code = payload.status;
			state.user = {};
		},
	},
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
