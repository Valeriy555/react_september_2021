const Dogs = ({dogs, deleteDog}) => {
    return (
        <div>
            {dogs.map(({id, name})=> <div key={id}>{name} <button onClick={()=>deleteDog(id)}>Delete</button></div> )}
        </div>
    );
};

export {Dogs};