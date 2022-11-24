import react, { useState } from 'react';

import IMGUR_AUTHORIZATION from '../env';


const Albums = ({ albumList }) => {
  
    const [albumCovers, setAlbumCovers] = useState([]);
  
    const fetchAlbumThumbnail = (shortCode) => {
      const details = {
        headers: {
          'Authorization': IMGUR_AUTHORIZATION
        }
      }
    
      fetch(`https://api.imgur.com/3/album/${shortCode}`, details)
        .then(data => data.json())
        .then(data => {
          setAlbumCovers(albumCovers.push(`https://i.imgur.com/${data.data.cover}.jpg`));
        });
    }
  
  const fetchAlbums = () => {
    const albumCoversList = Object.values(albumList)
      .map(item => fetchAlbumThumbnail(item));
    
    console.log(albumCoversList);
  }
  
  const hydrateAlbumList = (imageLink) => {
    
  }
  
  
  return (
    <div>
    <button onClick={() => fetchAlbums()}>DO IT</button> 
   </div>
  )
}
export default Albums;