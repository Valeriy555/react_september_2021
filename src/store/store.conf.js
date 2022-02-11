import {configureStore} from "@reduxjs/toolkit"
import carReducerSlice from "./car.slice";
import userReducerSlice from "./user.slice";
import postReducerSlice from "./post.slice";
import commentReducerSlice from "./comments.slice";

const store = configureStore({
    reducer: {
        carReducerSlice,
        userReducerSlice,
        postReducerSlice,
        commentReducerSlice
    }
})

export default store