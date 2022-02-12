import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Comment} from "../../components";
import {getAllComments} from "../../store";



const CommentsPage = () => {

    const {comments} = useSelector(state => state['commentReducerSlice']);
    console.log(comments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])


    return (
        <div>

            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};