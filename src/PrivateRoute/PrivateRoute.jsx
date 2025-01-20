import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext);
  const location = useLocation();

  if(user?.email && loading === true){
    return children;
  }else{
    return <Navigate to="/signup" state={{from:location}} replace></Navigate>
  }
};

export default PrivateRoute;