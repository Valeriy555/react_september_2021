import React from 'react';
import Header from "../Header/Header";
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

export function Layout  () {



    return (

        <>
        <div >
            <Header/>

        </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

        </>
    );
};

