import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Route } from 'react-router-dom';

import { baseUrl } from "../../services";
import Album from '../Album';

const User = ({ match }) => {

    const [albums, setAlbums] = useState([]);
    const [albumId, setAlbumId] = useState('');
    const [albumsData, setAlbumsData] = useState([]);

    // console.log(match, 'match');

    useEffect(() => {
        const getFetch = async () => {
            const result = await axios(baseUrl(`albums?userId=${match.params.id}`));
            setAlbums(result.data);
            result.data.map(async album => {
                setAlbumId(album.id);
                const albumData = await axios(baseUrl(`photos?albumId=${album.id}`));
                setAlbumsData(...albumsData, albumData.data)
            })


        };
        getFetch();
    }, [match.params.id]);

    const photosCount = albumsData.filter(i => i.albumId === albumId);
    const thumbnailUrl = photosCount.map(i => i.albumId ? i.thumbnailUrl : '').join('');
    const handleFunc = (id) => {
        albumsData.map(i => {
            if (i.albumId === id) {
                console.log(`${i.albumId}`);
                console.log(`${i.thumbnailUrl}`);
                return `${i.thumbnailUrl}`

            }
        })
    }
    // console.log(albumsData, 'url----------');
    // console.log(albums, 'albums----------');

    return (
        <div>
            <p>{`User id : ${match.params.id}`}</p>
            <ul>
                {
                    albums.map(album => {
                        return (
                            <li key={album.id}>
                                <p>Обложка</p>
                                <img src={`${thumbnailUrl}`} alt="" />
                                <div>{handleFunc(album.id)}</div>
                                <NavLink to={`${match.url}/album/${album.id}`}>Title: {album.title}</NavLink>
                                <p>Количество фото в альбоме: {photosCount.length}</p>
                            </li>
                        )

                    })
                }
            </ul>
            {/* <Route path={`${match.path}/album/:id`} component={Album}></Route>       */}
        </div>
    )
}

export default User;