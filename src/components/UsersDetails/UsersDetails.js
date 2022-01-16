import React from 'react';

const UsersDetails = ({user,getUserId}) => {
    const {
        id, name, username, email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone, website,
        company
    } = user;

    return (
        <div>
            <div>{id}) {name} {username} </div>
            <div> Email: {email} </div>
            <div>
                 Address: {street},{suite},{city},{zipcode},<br/> geo:{lat},{lng}
            </div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>
                 Company: {company.name},{company.catchPhrase},{company.bs}
            </div>
            <hr/>
            <button onClick={() => getUserId(id) }>Posts</button>
        </div>
    );
};

export default UsersDetails;