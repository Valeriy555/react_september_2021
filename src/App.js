import {Route, Routes} from "react-router-dom";

import { Form, Layout} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";


const App = () => {

    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'cars'} element={<CarsPage/>}/>

                    <Route path={'form'} element={<Form/>}/>

                    <Route path={'users'} element={<UsersPage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}/>
                </Route>

            </Routes>

        </div>

    );
};

export default App;
