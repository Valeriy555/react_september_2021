import React, {useState} from 'react';

const Form = () => {
    const [form, setForm] = useState({name:'', username:'', email:''})

    const formHandler = (e) => {
       const eventData = {...form, [e.target.name]:e.target.value}
        setForm({...form,...eventData})
    }

    return (
        <div>
            <form>
                <label> <input type="text" name={'name'} value={form.name} onChange={formHandler}/> </label>
                <label> <input type="text" name={'username'} value={form.username} onChange={formHandler}/> </label>
                <label> <input type="text" name={'email'} value={form.email} onChange={formHandler}/> </label>
            </form>
        </div>
    );
};

export default Form;