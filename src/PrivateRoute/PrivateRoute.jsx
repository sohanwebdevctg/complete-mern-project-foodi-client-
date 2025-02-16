
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../hook/useAuth';

const PrivateRoute = ({children}) => {

  const {user , loading} = useAuth();

  // navigate the location
  const location = useLocation()

  //user
  if(!user && !loading){
    return <Navigate to="/" state={{from: location}} replace></Navigate>
    }


  return children
};

export default PrivateRoute;