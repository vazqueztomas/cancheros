import React, { useState, useEffect } from "react";
import { getTeams, getUser } from "../services/services";
import Matches from "./Matches";
import FormNewMatch from "./components/FormNewMatch";
import Button from "./components/Button";
import UserNavbar from "./components/UserNavbar";

const MainScreen = () => {
  const [partidosEnCancha, setPartidosEnCancha] = useState({
    ganados: 0,
    perdidos: 0,
    empates: 0,
  });
  const [visibleForm, setVisibleForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const email = localStorage.getItem("email");
  const [user, setUser] = useState();
  const [wonMatches, setWonMatches] = useState(0);
  const [lostMatches, setLostMatches] = useState(0);
  const [drawMatches, setDrawMatches] = useState(0);

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
      <section class="bg-gray-800 flex flex-col pt-4 items-center text-white w-screen h-screen gap-8">
        {!visibleForm ? (
          <div class="max-h-[60%] overflow-auto w-[60%]">
            <Matches
              email={email}
              teams={teams}
              setPartidosEnCancha={setPartidosEnCancha}
              partidosEnCancha={partidosEnCancha}
              setWonMatches={setWonMatches}
              setLostMatches={setLostMatches}
              setDrawMatches={setDrawMatches}
            />
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
        <div class="text-sm">
          <p>
            Partidos <span class="text-green-400">ganados</span> en cancha:{" "}
            {wonMatches}
          </p>
          <p>
            Partidos <span class="text-red-400">perdidos</span> en cancha:{" "}
            {lostMatches}
          </p>
          <p>Partidos empatados en cancha: {drawMatches}</p>
        </div>
      </section>
    </>
  );
};

export default MainScreen;
