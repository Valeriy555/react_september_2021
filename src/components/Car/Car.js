import React from 'react';

import css from './Car.module.css'

const Car = ({car:{id,model,price, year},getCarId}) => {
    return (
        <div className={css.car}>

            <div >

                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>

            </div>
            <button onClick={()=> getCarId(id)}>Delete</button>


        </div>
    );
};

export {Car};