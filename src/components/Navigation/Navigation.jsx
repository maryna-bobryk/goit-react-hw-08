import clsx from 'clsx';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav>
      <NavLink className={setActiveClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActiveClass} to="/contacts">
          My Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
