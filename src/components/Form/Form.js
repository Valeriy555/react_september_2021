import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCar, createCar} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm(); // хук для работы с формами

const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        dispatch(createCar({data}))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>

            <label>Model: <input type= "text" {...register('model')} /> </label>
            <label>Price: <input type= "text" {...register('price')}/> </label>
            <label>Year: <input type= "text" {...register('year')}/> </label>
            <button>Save</button>
            {/*<button>{id?'Update':'Create'}</button>*/}

        </form>
    );
};
export {Form};