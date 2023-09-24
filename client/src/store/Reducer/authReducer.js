/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseUrl = 'http://localhost:5000';

export const singup = createAsyncThunk(
	'auth/singup',
	async (info, { rejectWithValue, fulfillWithValue }) => {
		try {
			const { data } = await axios.post(`${baseUrl}/user/singup`, info);
			console.log(data);
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
            state.code=null
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
	},
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
