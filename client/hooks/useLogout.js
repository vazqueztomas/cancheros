import axios from "axios";
import { myContext } from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const {setAuth} = myContext();
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post('/logout', {
        withCredentials : true,
      })
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
}

export default useLogout;