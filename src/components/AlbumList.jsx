import React from 'react';
import allowedAlbums from '../allowedAlbums.js';

const AlbumList = () => {

    const onAlbumListChange = (e) => {
        window.location = `${window.location.origin}/?${e.target.value}`;
    }

    const albumListItems = () => {
        const albums = Object.keys(allowedAlbums)
            .slice(1, allowedAlbums.length);

        const dropdown = ['Choose an album to view...'].concat(albums);

        return dropdown.map((album, iterator) =>
            <option
                key={iterator}
                value={allowedAlbums[album]}
            >
                {album}
            </option>
        );
    };

    return (
        <div
            style={{
                'display': 'flex',
                'height': '100vh',
                'width': '100vw',
                'alignItems': 'center',
                'justifyContent': 'center',
                'position': 'fixed',
                'zIndex': '1000',
                'background': 'rgba(255,255,255,0.75)',
            }}
        >
            <select onChange={onAlbumListChange}>
                {albumListItems()}
            </select>
        </div>

    );
}

export default AlbumList;

