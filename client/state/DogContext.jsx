/* eslint-disable react/prop-types */
import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import {
  createDog, getDogs
} from '../services/dogs.js';

const DogContext = createContext();

export default function DogProvider({ children }) {
  const [dogs, setDogs] = useState(null);
  const [dogsById, setDogsById] = useState({});
    
  const fetchDogs = async () => {
    const { data, error } = await getDogs();
    if (error) {
      console.log(error);
    } if (data) {
      setDogs(data);
      // const map = data.reduce((map, dog) => {
      //   map[dogs.id] = dog;
      //   return map;
      // }, {});
      setDogsById();
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);
  
  const addDog = (dog) => {
    setDogs((dogs) => [...dogs, dog]);
    setDogsById((dogById) => ({
      ...dogById, [dog.id]: dog,
    }));
  };

  const value = {
    dogs, setDogs, dogsById, addDog,
  };

  return (
    <DogContext.Provider value={value}>
      {children || <Outlet /> }
    </DogContext.Provider>
  );
}


export function useDogs() {
  const [error, setError] = useState(null);
  const { dogs, setDogs } = useContext(DogContext);
  
  const addDog = async (dogs) => {
    const { data, error } = await createDog(dogs);
    if (error) {
      setError(error.message);
    } else {
      setDogs((dogs) => [...dogs, data]);
      setError(null);
    }
  }; return { dogs, error, addDog };
}

