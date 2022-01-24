import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import {postService} from "../../services/post.service";

export function PostDetailsPage() {

    let [postDetails, setPostDetails] = useState({});


    let {id} = useParams();


    useEffect(() => {

        postService.getById(id).then(value => setPostDetails(value))


    }, [id])


    return (
        <div>
            UserId: {postDetails.userId} <br/>
            ID: {postDetails.id} <br/>
            Title: {postDetails.title} <br/>
            Body: {postDetails.body}
            <hr/>
        </div>

    );
};

