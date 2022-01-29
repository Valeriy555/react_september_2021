import React, {useReducer, useRef} from 'react';


const FormAnimals = () => {

    const [state, dispatch] = useReducer(catDogReducer, {cats: [], dogs: []});

    const inputCat = useRef();
    const inputDog = useRef();

    const addCat = (e) => {
        e.preventDefault();
        const name = inputCat.current.value;
    }

    if (!name){
        return
    }

    const cat = {
        id: new Date().getTime(),
        name
    }

    dispatch({type: ac})

    return (
        <div>

            <form >
                Add Cat: <input ref={inputCat} type="text" name={'cat'}/>
                <button >Save</button>
                Add Dog: <input type="text" name={'cat'}/>
                <button >Save</button>
            </form>

            <hr/>

        </div>
    );
};

export {FormAnimals};