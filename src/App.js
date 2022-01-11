import React from 'react';
import Users from "./components/users/Users"
import Posts from "./components/posts/Posts"
import Comments from "./components/comments/Comments"

const App = () => {
    return (
        <div>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
};

export default App;
