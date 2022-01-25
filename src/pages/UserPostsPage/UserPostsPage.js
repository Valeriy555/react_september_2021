import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";

export function UserPostsPage() {
    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {

        userService.getByUserPosts(id).then(value => setUserPosts([...value]))


    }, [id])

    return (
        <div>

            {
                userPosts.map(user => <div key={user.id}>
                    userId: {user.userId}
                    id: {user.id}
                    title: {user.title}
                    body: {user.body}
                    <hr/>
                </div>)
            }
        </div>
    );
};

