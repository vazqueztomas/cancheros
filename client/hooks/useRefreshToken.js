import { myContext } from "../context/AuthProvider";
import { handleRefreshToken } from "../services/services";

const useRefreshToken = () => {
  const { setAuth } = myContext();

  const refresh = async () => {
    const response = await handleRefreshToken();
    console.log(response);

    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
