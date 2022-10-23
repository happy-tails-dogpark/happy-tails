/* eslint-disable max-len */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import UserProvider from '../state/UserContext';
import AuthForm from './Auth/AuthForm';
import Credits from './Credits/Credits';
import Layout from './page/Layout';
import ParkList from './lists/ParkList';
import Doggo from './Doggos/Doggo';
import DogProvider from '../state/DogContext';
import DogProfile from './Doggos/DogProfile.jsx';
import ParkDetail from './lists/ParkDetail';

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />} />

            <Route path="search" element={<ParkList />} />
            
            <Route path="park">
              <Route path=":id" element={<ParkDetail />} />
            </Route>
          
            <Route path="credits" element={<Credits />} />
            
            <Route path="dog" element={<DogProvider />} >
              <Route index element={<Doggo />} />
              <Route path="profile" element={<DogProfile />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}
