import React, { useEffect, useState } from "react";
import axios from "axios";
// import { NavLink, Route, Switch } from 'react-router-dom';

import { baseUrl } from "../../services";
// import Album from './Album';

const Album = ({ match }) => {

    const [photos, setPhotos] = useState([]);

    console.log(match, 'match');

    useEffect(() => {
        const getFetch = async () => {
            const result = await axios(baseUrl(`photos?albumId=${match.params.id}`));
            console.log(result.data.length, '----num===');
            setPhotos(result.data);
        };
        getFetch();
    }, [match.params.id]);

    return (
        <div>
            <p>Photos</p>
            <ul>
                {
                    photos.map(photo => (
                        <li key={photo.id}>
                            {/* <NavLink to={`${match.url}/album/${album.id}`}>Title: {album.title} </NavLink> */}
                            {/* {`${photo.thumbnailUrl}`} */}
                            <img src={`${photo.thumbnailUrl}`} alt="" />
                            <img src={`${photo.url}`} alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Album;