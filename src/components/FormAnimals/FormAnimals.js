import React from 'react';

import css from "./FormAnimals.modele.css";

const FormAnimals = () => {
    return (
        <div>
            <form className={css.form} >

                Add Cat: <input type="text" name={'cat'}/>
                <button >Save</button>
                Add Dog: <input type="text" name={'cat'}/>
                <button >Save</button>

            </form>
        </div>
    );
};

export {FormAnimals};