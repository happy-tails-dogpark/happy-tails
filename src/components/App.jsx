import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Colors from './Colors/Colors.jsx';
import Orange from './Orange/Orange.jsx';
import Blue from './Blue/Blue.jsx';
import BlueGreen from './Blue/BlueGreen.jsx';
import BabyBlue from './Blue/BabyBlue.jsx';
import DarkBlue from './Blue/DarkBlue.jsx';
import Layout from './Page/Layout.jsx';
import Form from './Forms/FormLayout.jsx';
import Search from './Search/Search.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Colors />} />
          <Route path="orange" element={<Orange />} />
          <Route path="blue" element={<Blue />} >
            <Route path="baby blue" index element={<BabyBlue />} />
            <Route path="dark blue" element={<DarkBlue />} />
            <Route path="blue green" element={<BlueGreen />} />
          </Route>
          <Route path="form" element={<Form />} />
          <Route path="search" element={<Search />} />

        </Route>


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
