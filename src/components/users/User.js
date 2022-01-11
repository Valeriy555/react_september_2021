export default function User (props){
    let {id,name, username,email,street,suite, phone,website,city} = props;
    return (
        <div>
            {id}-{name}-{username}-{email}- <br/>
            Address : <br/>
            {street} - {suite} - {city}
            {phone} - {website}
<hr/>
        </div>
    );
}