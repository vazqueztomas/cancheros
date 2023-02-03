import axios from "axios";
import { myContext } from "../context/AuthProvider";

const useLogout = () => {
  const {setAuth} = myContext();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post('/logout', {
        withCredentials : true,
      })
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
}

export default useLogout;