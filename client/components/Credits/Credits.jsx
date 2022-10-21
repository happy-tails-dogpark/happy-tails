/* eslint-disable max-len */
import styles from './Credits.css';
import booty from '../../../public/bootyimage.png';
import linkedin from '../../../public/linkedin.png';
import github from '../../../public/github.png';
import colter from '../../../public/colter.png';
import amanda from '../../../public/amanda.png';
import mariah from '../../../public/mariah.png';

export default function Credits() {
  return (
    <div className={styles.page}>
      <div className={styles.devs}>
        <div className={styles.person}>
          <div className={styles.blurb}>
            <img className={styles.photo} src={amanda} />
            <p><p className={styles.name}>Amanda Hecht</p> lives in Denver, CO with her dogs Boulder and Arya. She is a full-stack software engineer.</p>
          </div>
          <a href="https://github.com/amanda-hecht89" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="https://www.linkedin.com/in/amanda-hecht/" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
        <div className={styles.person}>
          <div className={styles.blurb}>
            <img className={styles.photo} src={colter} />
            <p><p className={styles.name}>Colter Garrison</p> lives in Corvallis, OR with his dog Ožujsko. He is a full-stack software engineer.</p>
          </div>
          <a href="https://github.com/Colter-Garrison" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="https://www.linkedin.com/in/colter-garrison/" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
        <div className={styles.person}>
          <div className={styles.blurb}>
            <img className={styles.photo} src={mariah} />
            <p><p className={styles.name}>Mariah Schock</p> lives in Sherwood, OR with her dog Bruce. She is a full-stack software engineer.</p>
          </div>
          <a href="https://github.com/mariahschock" target="_blank" rel="noreferrer"><img className={styles.github} src={github} /></a>
          <a href="https://www.linkedin.com/in/mariah-schock/" target="_blank" rel="noreferrer"><img className={styles.linkedin} src={linkedin} /></a>
        </div>
      </div>
      <footer>
        <img className="booty" src={booty} height="80"/>
      </footer>

    </div>
  );
}
