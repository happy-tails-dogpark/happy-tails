

import Navigation from './Navigation.jsx';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
      </div>

      <h1>My Template App for the FuTuRe.....</h1>
      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
    </header>
  );
}