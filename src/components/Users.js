import {useEffect, useState} from "react";

import {getAxiosUsers} from "../services/user.service";
import User from './User'
import './Users.css'



export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState();


    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]))
    }, [])

const infoUser = (u) => {
        setUser({...u});
    getAxiosUsers(u.id).then(value => setUser([...value]))
}

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map((value,index )=> <User key={value.id} id={value.id}  name={value.name}
                    item={value} infoUser={infoUser}/>)
                }
            </div>

             <div className={"user-box"}>
                {JSON.stringify(user)}

            </div>

        </div>
    );
}