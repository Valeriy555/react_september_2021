import React from 'react';

const Post = ({post:{userId,id,title,body}}) => {
    return (
        <div>
            <div>userId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};