import {useEffect, useState} from "react";
import Comment from "./Comment";

export default function App (){

    let [commentList, setCommentsList] = useState([]); // useState - это хук

    useEffect( () => {                                   // в середине useEffect делаем fetch-запросы
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                console.log(comments);

                setCommentsList(comments);
            })

    },[])

    return (
        <div>

            {commentList.map(value =>
                <Comment userId = {value.postId} id = {value.id} title = {value.name} email = {value.email} body = {value.body}/>)}

        </div>
    );
}