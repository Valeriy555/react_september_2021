import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

const App = () => {
   const [user, setUser] = useState(null);
   const getUser = (user) => {
       setUser(user)
   }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser ={getUser} />

                {user && <UsersDetails key = {user.id} user={user}/>}
            </div>
            <Posts/>
        </div>
    );
};

export default App;
