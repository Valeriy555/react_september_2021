import {useForm} from "react-hook-form";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarById} from "../../store";
import {CarValidator} from "../../validators/car.validator";

const Form = () => {
    const {carForUpdate} = useSelector(genStore => genStore['carReducerSlice'])

    const {
        handleSubmit, register, reset, setValue, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode:"onTouched"}); // хук для работы с формами

    const dispatch = useDispatch();

    const submit = (data) => {
        if (carForUpdate === null) {
            dispatch(createCar({data}));
            reset()
        } else {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
            reset();
        }
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }

    }, [carForUpdate])

    return (


        <form onSubmit={handleSubmit(submit)}>
            <label/>Model:<input type='text' placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}

            <label/>Price:<input type='text' placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <label/>Year:<input type='text' placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button>Save/Update</button>
        </form>


    );
};
export {Form};