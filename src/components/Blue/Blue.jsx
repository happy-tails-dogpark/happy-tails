import { Outlet, Link } from 'react-router-dom';
import styles from './Blue.css';

export default function Blue() {
  return (
    <div className={styles.Blue}>
      <nav>
        <Link to="baby blue">BabyBlue</Link>
        <Link to="dark blue">DarkBlue</Link>
        <Link to="blue green">BlueGreen</Link>
      </nav>
      <h1>Blue</h1>
      <Outlet />
    </div>
  );
}
