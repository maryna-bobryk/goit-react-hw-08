import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Hi, {user.name}</p>
      <button type="button" className={s.btn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
