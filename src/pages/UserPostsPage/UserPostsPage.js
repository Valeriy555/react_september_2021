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
                    UserId: {user.userId} <br/>
                    ID: {user.id} <br/>
                    Title: {user.title} <br/>
                    Body: {user.body}
                    <hr/>
                </div>)
            }
        </div>
    );
};

