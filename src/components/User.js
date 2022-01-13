

export default function User (props)
{
let{id,name} = props;
return(
    <div>
        {id}-{name}
        {/*<button onClick={onClickUserChose}>Users details</button>*/}
    </div>
);
}