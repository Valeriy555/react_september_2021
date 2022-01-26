import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services";

export function AlbumsPage() {

    // const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    // const {state} = useLocation()

    useEffect(() => {

        // if (state) {
        //     setAlbums(state)
        //     return
        // }


        userService.getByAlbums().then(value => setAlbums(value))


    }, [])

    return (
        <div>
            AlbumsPage

            {
                albums.map(album => <div key={album.id}>
                    userId:{album.userId} <br/>
                    ID: {album.id} <br/>
                    Title: {album.title} <br/>

                </div>)
            }
            <Outlet/>
        </div>
    );
};

