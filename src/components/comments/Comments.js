import {useEffect, useState} from "react";
import Comment from "./Comment";

export default function Comments (){

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
            <p>COMMENTS: </p>
            {commentList.map(value =>
                <Comment userId = {value.postId} id = {value.id} name = {value.name} email = {value.email} body = {value.body}/>)}

        </div>
    );
}