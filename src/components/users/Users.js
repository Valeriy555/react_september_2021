import {useEffect, useState} from "react";
import User from "./User";

export default function App (){

    let [userList, setUsersList] = useState([]); // useState - это хук

    useEffect( () => {                                   // в середине useEffect делаем fetch-запросы
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                console.log(users);

                setUsersList(users);
            })

    },[])

    return (
        <div>

            {userList.map(value =>
                <User id = {value.id} name = {value.name} username = {value.username}/>)}
            <hr/>
        </div>
    );
}
