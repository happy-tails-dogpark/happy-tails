import { useEffect, useState } from 'react';
import { getDogById } from '../../services/dogs';
import styles from './DogProfile.css';
import dogHead from '../../../public/doghead.png';

export default function DogProfile() {
  const [dog, setDog] = useState({});

  useEffect(() => {
    async function fetchDogs() {
      const response = await getDogById();
      setDog(response.data);
    } fetchDogs();
  }, []
  );

  return (
    <div className={styles.Profile}>
      <div className={styles.contain}>
        <img className={styles.dogHead} src={dogHead} />
      </div>
      <h2>Name: {dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      <p>Birthday: {dog.birthday}</p>
    </div>
  );
}
