import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";


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
            <div>
                UserId: {postDetails.userId} <br/>
                ID: {postDetails.id} <br/>
                Title: {postDetails.title} <br/>
                Body: {postDetails.body}
                <hr/>
                <Link to={'comments'}>
                    <button key={postDetails.id}>Post Comments</button>
                </Link>
            </div>
            <Outlet/>

        </div>

    );
};

