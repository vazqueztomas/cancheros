import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';


const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshToken();

  const {auth} = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } 

    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`); 
    console.log(`aT: ${JSON.stringify(auth?.accessToken)}`); 
  }, []);

  return (
    <>
    { isLoading ? 
      <p>Loading..</p> 
      : <Outlet></Outlet>}
    </>
  )
}

export default PersistLogin;