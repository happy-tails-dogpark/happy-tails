import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getYelpById } from '../../services/fetch-utils';
import styles from './ParkDetail.css';

export default function ParkDetail() {
  const [park, setPark] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function handleFetchPark() {
      const parks = await getYelpById(id);
      setPark(parks);
    }
    handleFetchPark();
  }, []);

  return (
    <div>
      <div className={styles.ParkDetail}>
        <h1 className={styles.name}><b>{park.name}</b></h1>
        <a href = {park.url}>
          <img src={park.image_url}/>
        </a>
        <div>
          <p className={styles.font}>
            {park.location && park.location.display_address[0]}
            <br></br>
            {park.location && park.location.display_address[1]}
          </p>
        </div>
        <p className={styles.font}>Rating: {park.rating}/5</p>
      </div>
    </div>
  );
}
