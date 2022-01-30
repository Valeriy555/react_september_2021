import React, {useReducer, useRef} from 'react';

import {actions} from "../action.list";
import {Cats, Dogs} from "../components";
import {RedusersAnimals} from "../redusers";
import css from './formAnimals.module.css'




const FormAnimals = () => {

    const [state, dispatch] = useReducer(RedusersAnimals, {cats: [], dogs: []});

    const inputCat = useRef();
    const inputDog = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const name = inputCat.current.value;


    if (!name) {
        return
    }

    const cat = {
        id: new Date().getTime(),
        name
    }

    dispatch({type: actions.add_cat, payload: {cat}})
    inputCat.current.value = ''
}


const addDog = (e) => {
    e.preventDefault();
    const name = inputDog.current.value;

if(!name) {
    return
}


const dog = {
    id: new Date().getTime(),
    name
}

dispatch ({type: actions.add_dog, payload:{dog}})
inputDog.current.value = ''
}

const delCat = (id) => {
    dispatch({type:actions.del_cat, payload:{id}})
}

const delDog = (id) => {
    dispatch({type:actions.del_dog, payload:{id}})
}


    return (
        <div>

            <form className={css.form} >
                <div>
                Add Cat: <input ref={inputCat} type="text" name={'cat'}/>
                <button onClick={addCat} >Save</button>
                </div>

                <div>
                Add Dog: <input ref={inputDog}  type="text" name={'dog'}/>
                <button onClick={addDog} >Save</button>
                </div>
            </form>

            <hr/>

            <div className={css.delElem}>
                <Cats cats={state.cats} deleteCat={delCat}/>
                <Dogs dogs={state.dogs} deleteDog={delDog}/>
            </div>

        </div>
    );
};

export {FormAnimals};