import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {getAllCars} from "../../store";
import css from './cars.module.css'

const Cars = () => {
    const {cars,status, error} = useSelector(genStore => genStore['carReducerSlice']);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getAllCars())

    },[])

    return (
        <div >
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}

            <div className={css.cars}>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};