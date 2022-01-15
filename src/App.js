import React from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from 'App.module.css'

const App = () => {
    return (
        <div>
            <div className={css.wrap}>
                <Users/>
                <UserDetails/>
            </div>
            <Posts/>
        </div>
    );
};

export default App;
