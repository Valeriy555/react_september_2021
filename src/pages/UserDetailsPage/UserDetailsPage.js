import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/user.service";
import User from "../../components/User/User";

 export function UserDetailsPage ()  {

let [userDetails, setUserDetails] = useState({});
// console.log(userDetails)

let {id} = useParams();


     useEffect(() => {

         userService.getById(id).then(value => setUserDetails(value))


     },[id])





    return (
        <div>
            UserDetailsPage

            {JSON.stringify(userDetails)}


         </div>
    );
};

