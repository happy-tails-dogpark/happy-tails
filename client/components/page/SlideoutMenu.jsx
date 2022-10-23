
import { useState, useEffect } from 'react';
import { useUser } from '../../state/UserContext';
// import { getLocalUser } from '../../services/auth';
import Navigation from './navigation.jsx';
import styles from './SlideoutMenu.css';
import classnames from 'classnames';

export default function SlideoutMenu({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  const className = classnames(styles.SlideoutMenu, {
    [styles.Open]: isOpen,
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

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
