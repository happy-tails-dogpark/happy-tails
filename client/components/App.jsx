/* eslint-disable max-len */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserProvider from '../state/UserContext';
import Auth from './Auth/Auth';
import AuthForm from './Auth/AuthForm';
import Credits from './Credits/Credits';
import Layout from './page/Layout';
import ParkList from './lists/ParkList';
import { useEffect, useState } from 'react';
import { getLocalUser } from '../services/auth';
import Doggo from './Doggos/Doggo';

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('JWT.token'));

  useEffect(() => {
    async function checkUser() {
      const currentUser = await getLocalUser();
      setUser(currentUser);
    } checkUser();
  }, []
  );

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="auth" 
              element={user ? <Navigate to="/search" replace /> : <Auth />} >
              <Route index element={<AuthForm mode="signin" />} />
              <Route path="signup" element={<AuthForm mode="signup" />} />
            </Route>
            <Route path="search" element={<ParkList />} />
          
            <Route path="credits" element={<Credits />} />
            <Route path="profiles" element={<Doggo />} />

          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

// <Route
//   path="/login"
//   element={user ? <Navigate to="/" replace /> : <LoginStandard />}
// />
