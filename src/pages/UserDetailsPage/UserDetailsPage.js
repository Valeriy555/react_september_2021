import React, {useEffect, useState} from 'react';
import { NavLink, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";

export function UserDetailsPage() {

    const {id} = useParams();
    const [userDetails, setUserDetails] = useState([]);
    const {state} = useLocation()

    useEffect(() => {

        if (state) {
            setUserDetails(state)
            return
        }

        userService.getById(id).then(value => setUserDetails({...value}))


    }, [id])


    return (
        <div>
            <div>
                ID:{userDetails.id} <br/>
                Name: {userDetails.name} <br/>
                Username: {userDetails.username} <br/>
                Email: {userDetails.email} <br/>
                Phone: {userDetails.phone} <br/>
                Website: {userDetails.website} <br/>

                <hr/>

                <NavLink to={'posts'}>
                    <button key={userDetails.id}>User Posts</button>
                </NavLink>
            </div>
            <Outlet/>

        </div>
    );
};

