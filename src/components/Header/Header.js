import React from 'react';
import {NavLink} from "react-router-dom";

import css from "../Layout/Layout.module.css"

export function Header (){
    return (
        <div className={css.header}>

            <NavLink to="/form">Form</NavLink>
            <NavLink to="/cars">Cars</NavLink>

            <NavLink to="/users">Users</NavLink>

            <NavLink to="/posts">Posts</NavLink>

            <NavLink to="/comments">Comments</NavLink>
        </div>
    );
};