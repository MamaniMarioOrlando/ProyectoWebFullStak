import { useContext } from 'react';
import AuthContext from '../contex.jsx/AuthProvider';

export const useAuth = () => {
  return (useContext(AuthContext));
}
