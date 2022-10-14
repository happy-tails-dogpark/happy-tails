import styles from './Credits.css';
import booty from '../../../public/bootyimage.png';

export default function Credits() {
  return (
    <div className={styles.page}>
      <h1>Meet the Happy Devs</h1>
      <div className={styles.devs}>
        <div className={styles.person}>
        Amanda
        </div>
        <div className={styles.person}>
        Colter
        </div>
        <div className={styles.person}>
        Mariah
        </div>
      </div>
      <footer>
        <img className="booty" src={booty} height="80"/>
      </footer>

    </div>
  );
}
