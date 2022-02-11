import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services";

export const getAllUsers = createAsyncThunk(
    'UserSlice/getAllUsers',

    async (_, {rejectWithValue}) => {
        try {
            const users = await placeholderService.getAllUsers();
            console.log(users)
            return users

        } catch (e) {
            return rejectWithValue(e.messages)
        }
    }
)

const initialState = {
    users: [],
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
    },

    extraReducers: {

        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        },
    }
})

const userReducerSlice = UserSlice.reducer
export default userReducerSlice
