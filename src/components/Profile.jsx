import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import styles       from './Profile.module.scss';

const Profile = () => {
  const auth0Object = useAuth0();

  // console.log(auth0Object);

  const { user, isAuthenticated, isLoading } = auth0Object;

  
  if (isLoading && !isAuthenticated) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={styles.profileWrapper}>
        <img src={user.picture} alt={user.name} />
        <p className={styles.username}>{user.name}</p>
        <p className={styles.email}>{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;