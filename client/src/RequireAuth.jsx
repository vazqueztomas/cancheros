import { Navigate, Outlet, useLocation } from "react-router-dom";
import { myContext } from "../context/AuthProvider";

const RequireAuth = () => {
  const {auth} = myContext();
  const location = useLocation();

  return (
    auth?.accessToken ?  
      <Outlet/> : 
      <Navigate to={'/login'} state = {{from: location}} replace />
  )
}

export default RequireAuth;