// import { myContext } from "../context/AuthProvider";
// import { handleRefreshToken } from "../services/services";

// const useRefreshToken = () => {
//   const { auth, setAuth } = myContext();

//   const refresh = async () => {
//     const response = await handleRefreshToken();
//     console.log(response);
//     setAuth({ ...auth, accessToken: response.accessToken });

//     return response.data.accessToken;
//   };

//   return refresh;
// };

// export default useRefreshToken;
