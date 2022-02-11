import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services";


export const getAllComments = createAsyncThunk(
    'CommentsSlice/getAllComments',

    async (_, {rejectWithValue}) => {
        try {
            const comments = await placeholderService.getAllComments()
            console.log(comments)
            return comments
        } catch (e) {
            return rejectWithValue(e.messages)
        }
    }
)


const initialState = {
    comments: [],
}

const CommentsSlice = createSlice({
    name: 'CommentsSlice',
    initialState,
    reducers: {

    },

    extraReducers: {

        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        },
    }
})

const commentReducerSlice = CommentsSlice.reducer
export default commentReducerSlice

