import { useState } from 'react';
import { getYelp } from '../../services/fetch-utils';

export default function ParkList() {                                        
  const [parks, setParks] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('');

  async function fetchAndStoreParks() {
    const data = await getYelp(yelpQuery);
    // const yelpData = data.toString();
    setParks(data);                                     
    console.log('parks', parks);                            
    console.log('blue', data);
                          
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreParks();

    setYelpQuery('');
  }

  // useEffect(() => {
  //   fetchAndStoreParks();
  // }, []);
  console.log('apple', parks);

  return (
    <div className="park-list">
      <div className="yelp-list">
        <form onSubmit={handleYelpSubmit}>
          <input onChange={e => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {
          parks.map((park, i) => <div className="park" key={park.name + i}>
            <p>{park.name}</p>
            <img src={park.image_url} />
          </div>)
        }
      </div>
    </div>
  );
}
