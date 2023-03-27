import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {albumsService} from "../../services";

export function PhotosPage ()  {

    const {id} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        albumsService.getByIdPhoto(id).then(value => setPhotos([...value]))

    }, [id])

    return (
        <div>


            {
                photos.map( photo => <div key={ photo.id}>

                    albumId:{photo.albumId} <br/>
                    ID: {photo.id} <br/>
                    Title: {photo.title} <br/>
                    Url: <img src={photo.url} alt="photo"/>
                    ThumbnailUrl: <img src={photo.thumbnailUrl} alt="photo"/>
                    <hr/>
                </div>)
            }

        </div>
    );
}

