import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="credits">Credits</NavLink>
      <NavLink to="search">Search</NavLink>
    </nav>
  );
}
