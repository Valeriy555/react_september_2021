import {useEffect, useState} from "react";
import User from "./User";


export default function Users (){

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
<p>USERS: </p>
            {userList.map(value =>
                <User id = {value.id} name = {value.name} username = {value.username} email = {value.email}
                      street = {value.address.street} suite = {value.address.suite} city = {value.address.city}
                      phone = {value.phone}
                />)}

        </div>
    );
}
