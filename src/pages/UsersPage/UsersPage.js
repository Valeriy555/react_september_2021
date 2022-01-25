import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './UsersPage.module.css';
import {userService} from "../../services";
import {User} from "../../components";


export function UsersPage () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))

    })



    return (

        <div>
        <div className={css.wrap}>

            <div className={css.users} >

            {users.map(user => <User key={user.id} user={user} />)}
            </div>

            <div className={css.details}>
                <Outlet/>
            </div>
        </div>

        </div>
    );
};

