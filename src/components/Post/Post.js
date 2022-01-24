import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import css from "./post.module.css";

const Post = ({post}) => {
    let {id, title} = post;



    return (
        <div className={css.wrap}>
            <div className={css.post}>{id}) {title}</div>



            <NavLink to={id.toString()} state={post} ><button  key = {post.id}>Details user</button></NavLink>
        </div>
    );
};

export default Post;