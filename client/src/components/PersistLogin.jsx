import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import { myContext } from "../../context/AuthProvider";


const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshToken();

  const {auth, persist} = myContext();

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

  return (
    <>
    {!persist
        ? <Outlet />
        : isLoading
            ? <p>Loading...</p>
            : <Outlet />
    }
</>
  )
}

export default PersistLogin;