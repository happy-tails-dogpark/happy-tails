import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="credits">Credits</NavLink>
      <NavLink to="search">Search</NavLink>
      <NavLink to="auth">Auth</NavLink>
      <NavLink to="profiles">Profile</NavLink>
    </nav>
  );
}
