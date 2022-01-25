import React from 'react';
import {Link} from "react-router-dom";

import css from "./post.module.css";


export function Post ({post}) {
    let {id, title} = post;

    return (
        <div className={css.wrap}>
            <div className={css.post}>{id}) {title}</div>



            <Link to={id.toString()} state={post} ><button  key = {post.id}>Details user</button></Link>
        </div>
    );
}

