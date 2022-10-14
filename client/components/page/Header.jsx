import styles from './Header.css';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}></div>
      <h1>HAPPY TAILS</h1>
      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>
    </header>
  );
}
