/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/search" className={styles.links}>Search Parks</NavLink>
      <NavLink to="/dog/profile" className={styles.links}>Doggo's Profile</NavLink>
      <NavLink to="/credits" className={styles.links}>Meet the Devs</NavLink>
    </nav>
  );
}
