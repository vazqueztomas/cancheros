import axios from "axios";

const OPTIONS = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export function setupServices() {
  const devUriBase = "http://localhost:8080";
  const prodUriBase = "https://cancheros.onrender.com";
  let getBaseUri = () =>
    window.location.host.includes("localhost") ||
    window.location.host.includes("127.0.0.1")
      ? devUriBase
      : prodUriBase;
  axios.interceptors.request.use(
    (req) => {
      return { ...req, url: getBaseUri() + req.url };
    },
    null,
    { synchronous: true }
  );
}

export const userLogin = async (userInfo) => {
  const response = await axios.post("/auth/login", userInfo, OPTIONS);
  return response;
};

export const userSignUp = async (userData) => {
  const response = await axios.post("/auth/signup", userData, OPTIONS);
  return response.data;
};

export const handleNewClub = async (userData) => {
  const response = await axios.post("/teams/handleNewClub", userData, OPTIONS);
  return response.data;
};

export const getUser = async (email) => {
  const response = await axios.get("/users/getUser", email, OPTIONS);
  return response.data;
};

export const setNewMatch = async (matchData) => {
  const response = await axios.post("/users/setNewMatch", matchData, OPTIONS);
  return response.data;
};

export const deleteMatch = async (matchData) => {
  const response = await axios.delete("/users/deleteMatch", matchData, OPTIONS);
  return response.data;
};

export const userLogout = async () => {
  const response = await axios.post("/auth/logout", OPTIONS);
  return response.data;
};

export const handleRefreshToken = async () => {
  const response = await axios.get("/auth/refresh", OPTIONS);
  return response;
};

export const getTeams = async () => {
  const response = await axios.get("/teams/getTeams", OPTIONS);
  return response.data;
};
