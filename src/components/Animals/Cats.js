const Cats = ({cats}) => {
    return (
        <div>
            {cats.map(({id, name}) => <div key={id}>{name}</div>)}
        </div>
    );
};

export {Cats};