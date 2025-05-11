import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

// const PrivatRout = ({ children }) => {
//   console.log('PRIVATE LOGIK');
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// export default PrivatRout;
