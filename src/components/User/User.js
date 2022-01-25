import React from 'react';
import {Link} from "react-router-dom";

import css from './user.module.css';

export function User ({user}) {
    let {id, name} = user;


    return (
        <div className={css.wrap}>
            <div className={css.user}>{id}) {name}</div>

            <Link to={id.toString()} state={user} ><button  key = {user.id}>Details user</button></Link>

        </div>
    );
};

