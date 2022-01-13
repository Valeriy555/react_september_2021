import {useEffect, useState} from "react";

import {getUsers} from "../services/user.service";
import User from './User'

export default function Users (){
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[])




// const chouseUser = (u) =>{
//     setUser({...u});
//
//     getPostsOfUser(u.id).then(value => setPost([...value]));
// }


return(
    <div className={'wrap'}>
        <div className={'user-box'}>
            {
                users.map(value =><User key={value.id} item={value.name} />)
                                         // choseUser={choseUser}/>)
            }

        </div>

    </div>
)
}