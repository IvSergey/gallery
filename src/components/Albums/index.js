import React, { useEffect, useState } from "react";
import axios from "axios";

import { baseUrl } from "./../../services";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseUrl("albums"));
      setAlbums(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>{album.title}{album.userId}</li>
      ))}
    </ul>
  );
};



export default Albums;
