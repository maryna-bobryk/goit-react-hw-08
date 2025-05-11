import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
