import AlbumList     from '../components/AlbumList.jsx';
import Gallery       from '../components/Gallery.jsx';
import Intro         from '../components/Intro.jsx';
import LoginButton   from '../components/LoginButton.jsx';
import LogoutButton  from '../components/LogoutButton.jsx';
import Profile       from '../components/Profile.jsx';
import ScrollArrow   from '../components/ScrollArrow.jsx';
import SidebarButton from '../components/SidebarButton.jsx';

import styles from '../components/App.module.scss';

const HomeWrapper = (props) => {
    const { captions, loadedImages, description, albumName } = props.galleryObject;

    return (
        <div>
            <div>
                <LoginButton />
                <Profile />
            </div>
            <div className={styles.sidebar}>
                <SidebarButton
                    hyperlink="mailto:mail@matthewpereira.com"
                    label="EMAIL"
                    target="_blank"
                />
                <SidebarButton
                    onClick={props.handleAboutClick}
                    label="ABOUT"
                />
            </div>
            <Intro
                title={albumName}
                description={description}
            />
            <ScrollArrow
                show={loadedImages && loadedImages.length}
                onClick={props.onScrollClick} />
            <Gallery
                images={loadedImages}
                captions={captions}
            />
        </div>
    )
}

export default HomeWrapper;