import { createContext, useContext, useEffect, useState } from 'react';
import { 
  getLocalUser, 
  signInUser, 
  signUpUser, 
  storeLocalUser, 
  verifyUser
} 
  from '../services/auth';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const localUser = getLocalUser();
  const [user, setUserState] = useState(localUser);
    
  const verify = async () => {
    const response = await verifyUser();
    setUser(response.user || null);
  };
    
  useEffect(() => {
    verify();
  }, []);
    
  const setUser = (user) => {
    storeLocalUser(user);
    setUserState(user);
  };
  
  const value = {
    user, setUser,
  };
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user } = useContext(UserContext);
  return user;
}
export function useAuth() {
  const [error, setError] = useState(null);
  const { setUser } = useContext(UserContext);

  const handleResponse = ({ user, error }) => {
    if (error) {
      console.log(error);
      setError(error.message);
    } else {
      setUser(user);
      setError(null);
    }
  };

  const signUp = async (credentials) => {
    const response = await signUpUser(credentials);
    const res = handleResponse(response);
    console.log('res', res);
  };
  const signIn = async (credentials) => {
    const response = await signInUser(credentials);
    handleResponse(response);
  };

  return { signIn, signUp, error };
}
