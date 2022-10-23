import styles from './Header.css';
import SlideoutMenu from './SlideoutMenu';
import booty from '../../../public/bootyimage.png';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <SlideoutMenu />
      </div>
      <h1>Happy Tails</h1>
      <div>
        <img src={booty} className={styles.Booty} />
      </div>
    </header>
  );
}
