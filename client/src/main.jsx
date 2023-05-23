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
import PersistLogin from "./components/PersistLogin";
import "./index.css";
import Login from "./Login";
import MainScreen from "./MainScreen";
import LoginSuccesfull from "./pages/LoginSuccesfull";
import NotFound from "./pages/PageNotFound";
import RequireAuth from "./RequireAuth";
import SelectTeam from "./SelectTeam";
import Signup from "./Signup";
import Contact from "./Contact";
import About from "./About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/successfull" element={<LoginSuccesfull />} />
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route element={<RequireAuth />}>
        <Route element={<PersistLogin />}>
          <Route path="/select-team" element={<SelectTeam />} />
          <Route path="/mainscreen" element={<MainScreen />} />
        </Route>
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
