import React, {useEffect, useState} from 'react';
import {Outlet, Route} from "react-router-dom";

import {userService} from "../../services/user.service";
import User from "../../components/User/User";
import css from './UsersPage.module.css';
import {UserPostsPage} from "../UserPostsPage/UserPostsPage";


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

