import {createSlice} from "@reduxjs/toolkit"


const carSlice = createSlice({
    name:'carSlice', // как бы имя данного слайса

    initialState:{   // начальное значение state: это обьект {},
        cars:[]      // первый ключ, значение которого пустой массив
    },

    reducers:{ // прописываем методы которые будут работать с state
        addCar:(state,action)=>{
            state.cars.push({
                id:new Date().getTime(),
                ...action.payload.data
            })

        },
       deleteCar:(state,action)=>{
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
       },
    }
})

const carReducer = carSlice.reducer // c carSlice вытащил reducer и записал в переменную carReducer
export default carReducer // экспортируем carReducer, который содержит уже в себе reducer

export const {addCar, deleteCar} = carSlice.actions; // деструкторизировал addCar и deleteCar,
// что бы в дальнейшем их использовать напрямую. Вытягиваем их с reducers, через actions
// (actions это методы addCar и deleteCar  так настроен редукс, нужно тупо запомнить это) и экспортируем сразу
