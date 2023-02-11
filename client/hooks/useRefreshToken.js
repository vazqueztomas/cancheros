import axios from "axios";
import { myContext } from "../context/AuthProvider";

const useRefreshToken = () => {
  const {setAuth} = myContext();


  const refresh = async () => {
    const response = await axios.get('/auth/refresh', {
      withCredentials: true,
    })
    setAuth(prev => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
      }
    });

    return response.data.accessToken;
  }

  return refresh;
}

export default useRefreshToken;