import React        from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles       from './LogInOutButton.module.scss';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  
  return !isAuthenticated ? <button className={styles.loginButton} onClick={() => loginWithRedirect()}>Log In</button> : null;
};

export default LoginButton;