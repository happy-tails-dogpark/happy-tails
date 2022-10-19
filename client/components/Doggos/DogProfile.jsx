import { useEffect, useState } from 'react';
import { getDogById } from '../../services/dogs';

export default function DogProfile() {
  const [dog, setDog] = useState({});
  console.log('dog', dog);

  useEffect(() => {
    async function fetchDogs() {
      const response = await getDogById();
      console.log('response', response);
      setDog(response.data);
    } fetchDogs();
  }, []
  );

  return (
    <div>
      <h1>DOG PROFILE</h1>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
    </div>
  );
}
