import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

export function UserDetailsPage() {

    let [userDetails, setUserDetails] = useState({});


    let {id} = useParams();


    useEffect(() => {

        userService.getById(id).then(value => setUserDetails(value))


    }, [id])


    return (
        <div>
            {/*{JSON.stringify(userDetails)}*/}
            ID:{userDetails.id} <br/>
            Name: {userDetails.name} <br/>
            Username: {userDetails.username} <br/>
            Email: {userDetails.email} <br/>
            Phone: {userDetails.phone} <br/>
            Website: {userDetails.website} <br/>

            <hr/>

        </div>
    );
};

