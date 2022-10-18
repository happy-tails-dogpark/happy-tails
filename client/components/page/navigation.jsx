import { NavLink } from 'react-router-dom';
import styles from './navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink to="credits">Credits</NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="auth">Auth</NavLink>
      <NavLink to="dogs">Doggos</NavLink>
    </nav>
  );
}
