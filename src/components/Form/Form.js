import {useForm} from "react-hook-form";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCarById} from "../../store";
import {CarValidator} from "../../validators/car.validator";
import css from './Form.module.css';


const Form = () => {
    const {carForUpdate} = useSelector(genStore => genStore['carReducerSlice'])

    const {
        handleSubmit, register, reset, setValue, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"}); // хук для работы с формами

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

        <div>
            <div className={css.form}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={css.input_wrap}>
                        <div className={css.inp}>
                            <label>Model:<input type='text' placeholder={'enter model'} {...register('model')}/></label>
                        </div>
                        {errors.model && <span>{errors.model.message}</span>}


                        <div className={css.inp}>
                            <label>Price:<input type='text' placeholder={'enter price'} {...register('price')}/></label>
                        </div>
                        {errors.price && <span>{errors.price.message}</span>}

                        <div className={css.inp}>
                            <label>Year:<input type='text' placeholder={'enter year'} {...register('year')}/></label>
                        </div>
                        {errors.year && <span>{errors.year.message}</span>}

                        <div>
                            <button className={css.btn}>Save/Update</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>


    )
};
export {Form};