import React from 'react';
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {placeholderService} from "../services";

export const getAllPosts = createAsyncThunk(
    'PostsSlice/getAllPosts',

    async (_, {rejectWithValue}) => {
        try {
            const posts = await placeholderService.getAllPosts();
            console.log(posts)
            return posts
        } catch (e) {
            return rejectWithValue(e.messages)
        }
    }
)

const initialState = {
    posts: [],
}

const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {},

    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        },
    }
})
const postReducerSlice = PostsSlice.reducer
export default postReducerSlice
