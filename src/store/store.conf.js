import {configureStore} from "@reduxjs/toolkit"
import carReducerSlice from "./car.slice";

const store = configureStore({
    reducer: {
        carReducerSlice
    }
})

export default store