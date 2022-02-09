import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carToUpdate, deleteCarThunk} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (


        <div className={css.car_wrap}>
            <div className={css.car}>
                <div>ID: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>

                <div className={css.btn}>
                    <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>

                    <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
                </div>
            </div>


        </div>

    )
        ;
};

export {Car};