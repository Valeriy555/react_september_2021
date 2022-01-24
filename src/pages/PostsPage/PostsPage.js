import React, {useEffect, useState} from 'react';


import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from './PostPage.module.css'
import {Outlet} from "react-router-dom";


export function PostsPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    })


    return (

        <div className={css.wrap}>

            <div className={css.posts}>

                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={css.details}>

                <Outlet/>

            </div>

        </div>
    );
};

