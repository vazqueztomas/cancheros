import React, { useState, useEffect } from "react";
import { getTeams, getUser } from "../services/services";
import LogoutButton from "./LogoutButton";
import Matches from "./Matches";
import FormNewMatch from "./components/FormNewMatch";
import Button from "./components/Button";
import UserNavbar from "./components/UserNavbar";

const MainScreen = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const email = localStorage.getItem("email");
  const [user, setUser] = useState();

  const getTeam = async () => {
    try {
      const response = await getTeams();
      setTeams(response.teams);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeam();

    const getUserInfo = async () => {
      const response = await getUser(email);
      setUser(response);
    };

    getUserInfo();
  }, []);

  return (
    <>
      <UserNavbar />
      <section class="bg-gray-800 flex flex-col justify-center items-center text-white w-screen h-screen gap-8">
        {!visibleForm ? (
          <div class="max-h-[60%] overflow-auto w-[60%]">
            <Matches email={email} teams={teams} />
          </div>
        ) : null}

        {visibleForm ? (
          <FormNewMatch
            teams={teams}
            setVisibleForm={setVisibleForm}
            visibleForm={visibleForm}
            user={user}
          />
        ) : null}
        {!visibleForm && (
          <Button
            label="Añadir partido"
            func="primary"
            onClick={() => setVisibleForm(!visibleForm)}
          />
        )}
      </section>
    </>
  );
};

export default MainScreen;
