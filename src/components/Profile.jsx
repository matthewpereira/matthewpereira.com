import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import AlbumList from "./AlbumList";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [albumListVisible, toggleAlbumList] = useState(false);

  if (isLoading && !isAuthenticated) {
    return <div>...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {albumListVisible ? <AlbumList /> : null}
        <div className={styles.profileWrapper}>
          <img src={user.picture} alt={user.name} />
          <p className={styles.username}>{user.name}</p>
          <p className={styles.email}>{user.email}</p>
          <Link className={styles.albums} to={`/albums`}>
            Albums
          </Link>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default Profile;
