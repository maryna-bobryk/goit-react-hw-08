import clsx from 'clsx';
import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav>
      <NavLink className={setActiveClass} to="/login">
        Log In
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;
