import React, {useState} from 'react';


const App = () => {

    // let [cat, setCat] = useState('')
    // function onCatChange(e) {
    //     setCat(e.target.value)
    //
    // }


    let [formState,setFormState] = useState({cat:'', dog:''})

    let onCatSubmit = (e) => {
        console.log(e.target.cat.value)
        e.preventDefault();

    };

    let onDogSubmit = (e) => {

        console.log(e.target.dog.value)
        e.preventDefault();

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
            </div>


        </div>
    );
};

export default App;
