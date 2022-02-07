import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from 'react';
import {updateCarThunk, createCar} from "../../store";

const Form = () => {
    const {carForUpdate} = useSelector(genStore => genStore['carReducerSlice'])

    const {handleSubmit, register, reset, setValue} = useForm(); // хук для работы с формами

const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        dispatch(createCar({data}))

        reset()
    }


    useEffect(()=>{
        if (carForUpdate){
            setValue('model',carForUpdate.model)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }

    },[carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>

            <label>Model: <input type= "text" {...register('model')} /> </label>
            <label>Price: <input type= "text" {...register('price')}/> </label>
            <label>Year: <input type= "text" {...register('year')}/> </label>
            <button>Save</button>
            <button>Update</button>


        </form>
    );
};
export {Form};