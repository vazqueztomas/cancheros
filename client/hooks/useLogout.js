import axios from "axios";
import { myContext } from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { userLogout } from "../services/services";

const useLogout = () => {
  const {setAuth} = myContext();
  const navigate = useNavigate();

  const logout = async () => {
    setAuth({});
    try {
      const response = await userLogout();
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
}

export default useLogout;