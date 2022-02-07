import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carToUpdate, deleteCarThunk} from "../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (
        <div className={css.car}>

            <div>

                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>


            </div>


            <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>

            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>


        </div>
    );
};

export {Car};