import axios from "axios";
import { myContext } from "../context/AuthProvider";

const useRefreshToken = () => {
  const {setAuth} = myContext();

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true,
    })
    setAuth((prev) => {
      console.log(JSON.stringify(prev))
      console.log(response.data.accessToken);
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