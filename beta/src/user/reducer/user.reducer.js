import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUserList = createAsyncThunk('GET_USERS', async () => {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducer: {},
});
const { actions, reducer } = userSlice;
export const {} = actions;
export default reducer;
