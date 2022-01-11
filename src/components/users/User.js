export default function User (props){
    let {id,name, username} = props;
    return (
        <div>
            {id}***{name}***{username}

        </div>
    );
}