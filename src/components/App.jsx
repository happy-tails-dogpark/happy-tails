import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Credits from './Credits/Credits';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}
