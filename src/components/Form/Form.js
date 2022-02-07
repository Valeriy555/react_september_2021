import {useForm} from "react-hook-form";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../store";

const Form = () => {
    const {carForUpdate} = useSelector(genStore => genStore['carReducerSlice'])

    const {handleSubmit, register, reset, setValue} = useForm(); // хук для работы с формами

    const dispatch = useDispatch();

    const submitCreate = (data) => {
        console.log(data);
        dispatch(createCar({data}))
         reset()
    }

    const submitUpdate = (data) => {
        console.log(data);
        dispatch(updateCarById({id: carForUpdate.id, car: data}))
        reset()
    }




    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }

    }, [carForUpdate])

    return (
        // <form onSubmit={handleSubmit(submit)}>
        <form >

            <label>Model: <input type="text" {...register('model')} /> </label>
            <label>Price: <input type="text" {...register('price')}/> </label>
            <label>Year: <input type="text" {...register('year')}/> </label>

            <button onClick={handleSubmit(submitCreate)} >Save</button>
            <button onClick={handleSubmit(submitUpdate)}>Update</button>




        </form>
    );
};
export {Form};