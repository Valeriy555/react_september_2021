export default function Comment (props){
    let {postId,id,name, email, body} = props;
    return (
        <div>
            {postId} - {id} - {name} - {email} - {body}

        </div>
    );
}