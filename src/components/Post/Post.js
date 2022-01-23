import React from 'react';

const Post = ({post:{id, title}}) => {
    return (
        <div>
<div>{id}) {title}</div>
        </div>
    );
};

export default Post;