import React from 'react';
import Header from "../Header/Header";
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

const Layout = () => {
    return (

        <>
        <div className={css.header}>

            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>





        </div>
            <Outlet/>
            {/*<Header/>*/}
        </>
    );
};

export default Layout;