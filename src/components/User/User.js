import React from 'react';


const User = ({user:{id,name,username}}) => {


    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <hr/>
        </div>
    );
};

export {User};