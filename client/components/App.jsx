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

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="auth" element={<Auth />} >
            <Route index element={<AuthForm mode="signin" />} />
            <Route path="signup" element={<AuthForm mode="signup" />} />
          </Route>
          
          <Route path="credits" element={<Credits />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
