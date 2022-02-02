import React from 'react';
import {Car} from "../Car/Car";
import {useSelector} from "react-redux";

const Cars = () => {
   const {cars} = useSelector(state => state['carReducer']) // через этот хук обратился к store и запросил один из редюсеров,
    // в данном случае запросил редьюс carReducer и положил это в cars, который являеться ключем в initialState в вайл car.slice

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
};

export {Cars};