import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getYelpById } from '../../services/fetch-utils';

// import { getYelp } from '../../services/fetch-utils';

export default function ParkDetail() {
  const [park, setPark] = useState({});
  const { id } = useParams();
  console.log('id', id);
  console.log('park', park);

  //   async function handleFetchPark(id) {
  //     const parks = await getYelp(id);
  //     setPark(parks);
  //     console.log('parks', parks);
  //   }
  //   useEffect(() => {
  //     handleFetchPark();
  //   }, []);

  useEffect(() => {
    async function handleFetchPark() {
      const parks = await getYelpById(id);
      setPark(parks);
      console.log('parks', parks);
    }
    handleFetchPark();
  }, []);

  return (
    <div>
      <div>
        <h1>{park.name}</h1>
        <p>{park.phone}</p>
      </div>
    </div>
  );
}
