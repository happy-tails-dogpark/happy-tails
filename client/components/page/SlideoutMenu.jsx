
import { useState, useEffect } from 'react';
// import { getLocalUser } from '../../services/auth';
import { useUser } from '../../state/UserContext';
import Navigation from './navigation.jsx';
import styles from './SlideoutMenu.css';
import classnames from 'classnames';

export default function SlideoutMenu({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  // const [, setUser] = useState(localStorage.getItem('JWT.token'));
  const user = useUser();

  const className = classnames(styles.SlideoutMenu, {
    [styles.Open]: isOpen,
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  // useEffect(() => {
  //   async function checkUser() {
  //     const currentUser = await getLocalUser();
  //     setUser(currentUser);
  //   } checkUser();
  // }, []
  // );

  useEffect(() => {
    if (!isOpen) return;

    const clickHandler = () => setIsOpen(false);
    document.addEventListener('click', clickHandler);

    const keyHandler = (e) => {
      if (e.key !== 'Escape') return;
      clickHandler();
    };
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  if (user) return (
    <button className={className} onClick={handleClick}>
      <div className={styles.MenuContainer}>
        <Navigation navigation={navigation} />
      </div>
    </button>
  );
}
