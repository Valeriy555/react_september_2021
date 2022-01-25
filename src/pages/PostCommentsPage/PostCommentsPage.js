import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";

export function PostCommentsPage()  {

    const {id} = useParams();
    const [postComments, setPostComments] = useState([]);


    useEffect(()=>{

        postService.getByPostComments(id).then(value => setPostComments([...value]))
    },[id])


    return (
        <div>
            {
                postComments.map(post => <div key={post.id}>

                    PostId:{post.postId} <br/>
                    ID: {post.id} <br/>
                    Name: {post.name} <br/>
                    Email: {post.email} <br/>
                    Body: {post.body}
                    <hr/>
                </div>)
            }
        </div>
    );
};

