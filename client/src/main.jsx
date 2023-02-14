import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { setupServices } from "../services/services";
import App from "./App";
// import PersistLogin from './components/PersistLogin'
import "./index.css";
import Login from "./Login";
import MainScreen from "./MainScreen";
import RequireAuth from "./RequireAuth";
import SelectTeam from "./SelectTeam";
import Signup from "./Signup";
import Successfull from "./Successfull";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/successfull" element={<Successfull />} />
      <Route element={<RequireAuth />}>
        <Route path="/select-team" element={<SelectTeam />} />
        <Route path="/mainscreen" element={<MainScreen />} />
      </Route>
    </>
  )
);

setupServices();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
