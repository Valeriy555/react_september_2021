export default function Post (props){
    let {userId,id,title, body} = props;
    return (
        <div>
            {userId} - {id} - {title} - {body}

        </div>
    );
}