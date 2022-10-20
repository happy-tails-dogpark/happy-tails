import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/search">Search</NavLink>
      {/* <NavLink to="form">Form</NavLink> */}
      <NavLink to="/credits">Devs</NavLink>
      <NavLink to="/dog/profile">Profile</NavLink>
    </nav>
  );
}
