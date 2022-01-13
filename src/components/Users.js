import {useEffect, useState} from "react";

import 'src/Users.css'
import {getAxiosUsers} from "../services/user.service";
import User from './User'

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getAxiosUsers().then(({data}) => setUsers([...data]))
    }, [])


    return (
        <div className={'wrap'}>
            <div className={'user-box'}>
                {
                    users.map((value,index )=> <User key={value.id} id={value.id}  name={value.name}/>)
                    // choseUser={choseUser}/>)
                }

            </div>

        </div>
    );
}