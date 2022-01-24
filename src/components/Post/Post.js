import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./post.module.css";

const Post = ({post}) => {
    let {id, title} = post;
    let navigator = useNavigate();


    return (
        <div className={css.wrap}>
            <div className={css.post}>{id}) {title}</div>

            <button onClick={() => navigator(id.toString())}>Details post</button>
        </div>
    );
};

export default Post;