import {configureStore} from "@reduxjs/toolkit"
import carReducer from "./car.slice";

const store = configureStore({ // конфигурация store для всех слайсов

    reducer: {

        carReducer // наш слайс подключили к store

    }
})

export default store