import React            from 'react';

class AlbumList extends React.Component {
    constructor(props){
        super(props);

        this.state = { showList: false };

        const konamiHandler = this.konami(() => {
            this.setState({
                showList: true
            })
        });

        window.addEventListener('keydown', konamiHandler);
    }

    konami(callback) {
        let kkeys = [];
        // up,up,down,down,left,right,left,right,B,A
        const konami = '38,38,40,40,37,39,37,39,66,65';
        return event => {
            kkeys.push(event.keyCode);
            if (kkeys.toString().indexOf(konami) >= 0) {
                callback();
                kkeys = [];
            }
        };
    }

    onAlbumListChange = (e) => {
        window.location = `${window.location.origin}/?${e.target.value}`;	
    }

    albumListItems = () => {
        let albums = Object.keys(this.props.allowedAlbums);
        
        albums = albums.slice(1,albums.length);
        
        const dropdown = ['Choose an album to view...'].concat(albums);

        return dropdown.map((album, iterator) => <option key={iterator} value={this.props.allowedAlbums[album]}>{album}</option>);	
    };
    
    render = () => (
        this.state.showList ?
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
                <select 
                    onChange={this.onAlbumListChange}
                >
                    {this.albumListItems()}
                </select>
            </div>
            : null
    );
}

export default AlbumList;

