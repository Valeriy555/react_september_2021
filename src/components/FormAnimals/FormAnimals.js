import React, {useState} from 'react';

export  function FormAnimals () {


    let [formState,setFormState] = useState({cat:'', dog:''})

    let onCatSubmit = (e) => {
        e.preventDefault();
        // let cat = e.target.cat.value
        // console.log(cat)


    };

    let onDogSubmit = (e) => {
        e.preventDefault();
        // let dog = e.target.dog.value
        // console.log(dog)

    };

    function onChange(e) {
        setFormState({...formState,[e.target.name]:e.target.value})
    }
        return (
        <div>
            <div >
                <hr/>
                <form onSubmit={onCatSubmit}>
                    Add Cat: <input type="text" name={'cat'} placeholder={'enter name cat'} value={formState.cat} onChange={onChange}/>
                    <button>Save cat</button>

                </form>

                <form onSubmit={onDogSubmit}>
                    Add Dog: <input type="text" name={'dog'} placeholder={'enter name dog'} value={formState.dog} onChange={onChange}/>
                    <button>Save dog</button>
                </form>
                <hr/>
                <div>{formState.cat}</div>
                <div>{formState.dog}</div>

            </div>
        </div>
    );
};

