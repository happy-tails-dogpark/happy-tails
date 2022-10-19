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
import DogProvider from '../state/DogContext';
import DogProfile from './Doggos/DogProfile.jsx';
import ParkDetail from './lists/ParkDetail';

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
            <Route path="/" 
              element={user ? <Navigate to="/search" replace /> : <Auth />} >
              <Route index element={<AuthForm mode="signin" />} />
              <Route path="signup" element={<AuthForm mode="signup" />}  />
            </Route>

            <Route path="search" element={<ParkList />} />
            
            <Route path="park">
              <Route path=":id" element={<ParkDetail />} />
            </Route>
          
            <Route path="credits" element={<Credits />} />
            <Route element={<DogProvider />} >
              <Route path="form">
                <Route index element={<Doggo />} />
              </Route>
              <Route path="profile">
                <Route index element={<DogProfile />} />
              </Route>
            </Route>

          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
