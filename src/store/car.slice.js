import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {carService} from "../services";


const initialState = {
    cars: [],
    status:null,
    error:null,
    carForUpdate:null
}
export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',

    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll(); // когда функция начнет выполнятся, она перейдет в состояне pending (ниже в extraReducers)
            return cars

        } catch (e) {
            return rejectWithValue(e.messages)
        }
    }
)
export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data: newCar, id}, {dispatch}) => {
        try {
            console.log(id);
            const data = await carService.create(newCar);
            console.log(data);
            dispatch(addCar({data}))
        } catch (e) {

        }
    }
)
export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        } catch (e) {

        }
    }
)

// export const updateCarThunk = createAsyncThunk(
//     'carSlice/updateCarThunk',
//     async ({id,car}, {dispatch}) => {
//         try {
//             await carService.updateById(id,car);
//             dispatch(carToUpdate({car}))
//         } catch (e) {
//
//         }
//     }
// )



const carSlice = createSlice({
    name: 'carSlice',

    initialState,


    reducers: {
        addCar: (state, action) => {

            state.cars.push(action.payload.data);

        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },



        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },

//___________________________________________________________________________________________________________________________________


    extraReducers: {  // сюда возвращаются данные с  return cars который в getAllCars и дальше идет пошаговое их выполнение:
        [getAllCars.pending]: (state, action) => { // ожидание (загрузка)

            state.status = 'pending' // доступились до status в initialState и поменяли его значение с null на loading
            state.error = null

        },
        [getAllCars.fulfilled]: (state, action) => { // выполненный (когда данные пришли)
            state.status = 'fulfilled'
            state.cars = action.payload

        },
        [getAllCars.rejected]: (state, action) => { // отклоненный (когда в данных ошибка)
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducerSlice = carSlice.reducer
export default carReducerSlice

export const {addCar, deleteCar, carToUpdate} = carSlice.actions;
