import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

export function PostDetailsPage() {
    const {id} = useParams();
    let [postDetails, setPostDetails] = useState({});
    const {state} = useLocation()


    useEffect(() => {

        if (state) {
            setPostDetails(state)
            return
        }

        postService.getById(id).then(value => setPostDetails(value))


    }, [id])


    return (
        <div>
            UserId: {postDetails.userId} <br/>
            ID: {postDetails.id} <br/>
            Title: {postDetails.title} <br/>
            Body: {postDetails.body}
            <hr/>
            <NavLink to={'posts'}>
                <button key={postDetails.id}>Post Comments </button>
            </NavLink>
        </div>

    );
};

