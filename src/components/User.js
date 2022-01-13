export default function User ({id,name,infoUser,item})
{

    const onclickInfoUser = ()=>{
        infoUser(item);
    }


return(
    <div>
        {id}-{name}
        <button onClick={onclickInfoUser}>Users details</button>
        <hr/>
    </div>
);
}