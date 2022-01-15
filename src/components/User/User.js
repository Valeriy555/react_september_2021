

const User = ({user}) => {
    const {id,name}=user;
    return (
        <div>
            <div>{id} - {name}</div>
            <button>Details</button>
        </div>

    );
};

export default User;