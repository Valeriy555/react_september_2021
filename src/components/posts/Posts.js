import {useEffect, useState} from "react";
import Post from "./Post";


export default function Posts (){

    let [postList, setPostsList] = useState([]); // useState - это хук

    useEffect( () => {                                   // в середине useEffect делаем fetch-запросы
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                console.log(posts);

                setPostsList(posts);
            })

    },[])

    return (
        <div>
            <p>POSTS: </p>
            {postList.map(value =>
                <Post userId = {value.userId} id = {value.id} title = {value.title} body = {value.body}/>)}

        </div>
    );
}