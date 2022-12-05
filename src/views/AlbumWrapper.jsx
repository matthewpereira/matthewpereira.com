import Albums from "../components/Albums";
import LoginButton from "../components/LoginButton";
import Profile from "../components/Profile";

import styles from "../components/App.module.scss";

const AlbumWrapper = () => (
  <div className={styles.pageWrapper}>
    <div>
      <LoginButton />
      <Profile />
    </div>
    <Albums />
  </div>
);

export default AlbumWrapper;
