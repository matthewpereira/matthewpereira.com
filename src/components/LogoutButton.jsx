import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './LogInOutButton.module.scss';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <button className={styles.logoutButton} onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  ) : null;
};

export default LogoutButton;