import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    let userService = new userService ('users');

    useEffect(()=>{

    })
    return (
        <div>
            UsersPage
            <Outlet/>
        </div>
    );
};

export default UsersPage;