import React, { useState } from 'react';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

const AlbumListItems = ({ allowedAlbums, filter }) => {
      const albums = Object.keys(allowedAlbums)
          .slice(1,allowedAlbums.length);

      const filteredAlbums = albums.filter(i => i.toLowerCase().indexOf(filter.toLowerCase()) > -1);

      return filteredAlbums.map((album, iterator) =>
          <option               
              key={iterator}
              value={allowedAlbums[album]}
              style={{
                  'border': '0',
                  'width': '100%',
                  'height': '32px',
                  'borderRadius': '4px',
                  'marginBottom': '4px',
              }}
          >
              {album}
          </option>
      );
};

const AlbumList = ({ allowedAlbums }) => {
    const [ albumListVisible, setAlbumListVisible ] = useState(false);    
    const [ filter, setFilter ] = useState("");
    
    const konami = (callback) => {
        let kkeys = [];

        const konami = '38,38,40,40,37,39,37,39,66,65';

        return event => {
            kkeys.push(event.keyCode);
            
            if (kkeys.toString().indexOf(konami) >= 0) {
                callback();
                kkeys = [];
            }
        };
    }

    window.addEventListener('keyup', konami(() => { 
        setAlbumListVisible(true);
    }));

    const onFilterChange = (e) => {
        setFilter(e.target.value);
        if (e.keyCode == 13) {
              e.preventDefault();
              if (e.value.length != 0) {
                  console.log(e.value);
                  // Run my specific process with my_field.value 
                  window.location = `${window.location.origin}/?${allowedAlbums[e.target.value]}`
                  // e.value = '';
              }
          }
    }

    return (
        albumListVisible ?
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
                    'flexDirection': 'column',
                }}
            >
                <div style={{
                    'display':'flex',
                    'alignItems': 'center',
                    'justifyContent':'center',
                    'flexDirection': 'column',
                    'maxWidth': '600px',
                    'width':'90%',
                }}>
                    <DatalistInput
                        placeholder="Chocolate"
                        label="Select ice cream flavor"
                        onSelect={(item) => console.log(item.value)}
                        items={allowedAlbums}
                    />
                    <input 
                        role="combobox"
                        style={{
                            'width':'100%',
                            'padding': '12px',
                        }}
                        onChange={onFilterChange}
                        placeholder="Type to filter..."
                        list="albums"
                        autoFocus
                    ></input>
                    <datalist
                        id="albums" 
                        style={{
                            'paddingTop': '4px',
                            'width': '100%',
                            'height': '50vh',
                            'maxHeight': '640px',
                            'overflow': 'auto',
                            'background': 'white',
                        }}
                    >
                        <AlbumListItems allowedAlbums={allowedAlbums} filter={filter} />
                    </datalist>
                </div>
            </div>
            : null
    );

}

export default AlbumList;