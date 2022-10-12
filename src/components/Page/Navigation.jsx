import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="">Colors</NavLink>
      <NavLink to="blue">Blue</NavLink>
      <NavLink to="orange">Orange</NavLink>
      <NavLink to="form">Form</NavLink>
      <NavLink to="search">Search</NavLink>
    </nav>
  );
}
