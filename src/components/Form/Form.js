import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''})

    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value}
        setForm({...form, ...eventData})

    }
    const onSubmit = (e) => {
        e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <form>
                <label> <input type="text" name={'name'} value={form.name} onChange={formHandler}
                               placeholder={'enter name'}/> </label>
                <label> <input type="text" name={'username'} value={form.username} onChange={formHandler}
                               placeholder={'enter username'}/> </label>
                <label> <input type="text" name={'email'} value={form.email} onChange={formHandler}
                               placeholder={'enter email'}/> </label>

                <button onClick={onSubmit}>Filter</button>
            </form>
        </div>
    );
};

export default Form;