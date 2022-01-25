import React from 'react';
import { Route, Routes} from "react-router-dom";


import {PostCommentsPage, PostDetailsPage, PostsPage, UserDetailsPage, UserPostsPage, UsersPage} from "./pages";
import {Layout} from "./components";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'users'} element={<UsersPage/>}>

                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>

                    <Route path={'posts'} element={<PostsPage/>}>

                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>


                </Route>
            </Route>


        </Routes>
    );
};

export default App;
