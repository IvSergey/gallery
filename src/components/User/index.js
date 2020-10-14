import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Route } from 'react-router-dom';

import { baseUrl } from "../../services";
import Album from '../Album';

const User = ({ match }) => {

    const [albums, setAlbums] = useState([]);

    console.log(match, 'match');

    useEffect(() => {
        const getFetch = async () => {
            const result = await axios(baseUrl(`albums?userId=${match.params.id}`));
            console.log(result.data.length, '----ressssss===');
            setAlbums(result.data);
        };
        getFetch();
    }, [match.params.id]);

    return (
        <div>
            <p>{`User id : ${match.params.id}`}</p>
            <ul>
                {
                    albums.map(album => (
                        <li key={album.id}>
                            <NavLink to={`${match.url}/album/${album.id}`}>Title: {album.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <Route path={`${match.path}/album/:id`} component={Album}></Route>
        </div>
    )
}

export default User;