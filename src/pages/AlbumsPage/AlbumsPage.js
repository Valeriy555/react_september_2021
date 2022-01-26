import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {albumsService} from "../../services";



export function AlbumsPage() {

    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {


        albumsService.getByIdAlbum(id).then(value => setAlbums([...value]))

    }, [id])

    return (
        <div>

            {
                albums.map(album => <div key={albums.id}>
                    <hr/>
                    userId:{album.userId} <br/>
                    ID: {album.id} <br/>
                    Title: {album.title} <br/>

                    <Link to={`${id}/photos`.toString()}><button> Album photos </button></Link>
                </div>)
            }

            <Outlet/>
        </div>
    );
};

