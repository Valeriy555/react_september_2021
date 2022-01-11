import React from 'react';
import Users from "./components/users/Users"
import Posts from "./components/posts/Posts"
import Comments from "./components/comments/Comments"

import './components/Style.css'

const App = () => {
    return (
        <div>
            <div className={'item'}>

                <div className={'users'}>
                    <Users/>
                </div>

                <div className={'posts'}>
                    <Posts/>
                </div>

            </div>

            <div className={'comment'}>
                <Comments/>
            </div>

        </div>
    );
};

export default App;
