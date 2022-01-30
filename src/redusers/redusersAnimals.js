import React from 'react';
import {actions} from "../action.list";

const RedusersAnimals = (state,action) => {
    switch (action.type){
        case actions.add_cat:
            return {...state, cats:[...state.cats, action.payload.cat]}

        case actions.add_dog:
            return {...state, dogs:[...state.dogs, action.payload.dog]}

        case actions.del_cat:
            return {...state, cats:state.cats.filter(cat => cat.id!==action.payload.id)}

        case actions.del_dog:
            return {...state, dogs:state.dogs.filter(dog => dog.id!==action.payload.id)}

        default:
            return state
    }

};

export {RedusersAnimals};