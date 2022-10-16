/* eslint-disable max-len */
import styles from './Credits.css';
import booty from '../../../public/bootyimage.png';
import linkedin from '../../../public/linkedin.png';
import github from '../../../public/github.png';

export default function Credits() {
  return (
    <div className={styles.page}>
      <h1>Meet the Happy Devs</h1>
      <div className={styles.devs}>
        <div className={styles.person}>
          <div>
            Amanda
          </div>
          <a href="" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
        <div className={styles.person}>
          <div>
            Colter
          </div>
          <a href="https://github.com/Colter-Garrison" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="https://www.linkedin.com/in/colter-garrison/" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
        <div className={styles.person}>
          <div>
            Mariah
          </div>
          <a href="" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
      </div>
      <footer>
        <img className="booty" src={booty} height="80"/>
      </footer>

    </div>
  );
}
