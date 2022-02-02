import {configureStore} from "@reduxjs/toolkit"
import carReducerSlice from "./car.slice";

const store = configureStore({ // конфигурация store для всех слайсов
    reducer: {
        carReducerSlice // наш слайс подключили к store
    }
})

export default store