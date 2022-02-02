import {createSlice} from "@reduxjs/toolkit"

const carSlice = createSlice({
    name: 'carSlice', // как бы имя данного слайса

    initialState: {   // начальное значение state: это обьект {},                       | Это все
        cars: [],      // первый ключ, значение которого пустой массив                  | ячейка памяти
        info: 'Эту запись передали с слайса дополнительно' // просто для эксперемента   | в store
    },
    reducers: { // прописываем методы которые будут работать с state
        addCar: (state, action) => {   // ключ addCar: 'он же action'
            state.cars.push({                               // функция редьюссера
                id: new Date().getTime(),
                ...action.payload.data                      // через это можем получать инфу
            })
        },
        deleteCar: (state, action) => { // ключ: deleteCar
            state.cars = state.cars.filter(car => car.id !== action.payload.id) // функция редьюссера
        },
    }
})

const carReducerSlice = carSlice.reducer // c carSlice вытащил reducer и записал в переменную carReducer
export default carReducerSlice // экспортируем carReducer, который содержит уже в себе reducer

export const {addCar, deleteCar} = carSlice.actions; // деструкторизировал addCar и deleteCar,
// что бы в дальнейшем их использовать напрямую. Вытягиваем их с reducers, через actions
// (actions это методы addCar и deleteCar  так настроен редукс, нужно тупо запомнить это) и экспортируем сразу
