import React, {useState} from 'react';
import {useParams} from "react-router-dom";

export function PostCommentsPage()  {

    const {id} = useParams();
    const [postComments, setPostComments] = useState([]);

    return (
        <div>
            PostCommentsPage
        </div>
    );
};

