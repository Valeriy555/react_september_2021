import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './user.module.css';

const User = ({user}) => {
    let {id, name} = user;
    let navigator = useNavigate();



    return (
        <div className={css.wrap}>
            <div className={css.user}>{id} - {name}</div>

            <button onClick={() => navigator(id.toString())}>Details user</button>

        </div>
    );
};

export default User;