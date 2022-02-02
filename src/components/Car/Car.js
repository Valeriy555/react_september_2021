import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Car.module.css'
import {deleteCar} from "../../store";

const Car = ({car:{id,model,price, year}}) => {
    const dispatch = useDispatch();

    const {info} = useSelector(genStore => genStore['carReducerSlice']) // // просто для эксперемента

    return (
        <div className={css.car}>



            <div >

                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>

                <i>{info}</i> // просто для эксперемента

            </div>
            <button onClick={()=> dispatch(deleteCar({id}))}>Delete</button>


        </div>
    );
};

export {Car};