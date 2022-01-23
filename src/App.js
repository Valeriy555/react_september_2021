import React from 'react';
import {Route, Routes} from "react-router-dom";




import {PostDetailsPage, PostsPage, UserDetailsPage, UsersPage} from "./pages";
import {Layout} from "./components";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>} />

                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}/>

                </Route>

            </Route>


        </Routes>
    );
};

export default App;
