import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTeams, handleNewClub, getUser } from "../services/services";
import Team from "./Team";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";

const SelectTeam = () => {
  const [teamSelected, setTeamSelected] = useState("");
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  const getTeam = async () => {
    try {
      const clubes = await getTeams();
      setTeams(clubes.teams);
    } catch (error) {
      console.error(error);
    }
  };

  const getClubUser = async () => {
    try {
      const user = await getUser(email);
      user.club ? navigate("/mainscreen") : null;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClubUser();
    getTeam();
  }, []);

  const handleSelected = async team => {
    const data = {
      email,
      clubName: team,
    };
    try {
      await handleNewClub(data);
      navigate("/mainscreen");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section class="bg-gray-800 flex flex-col justify-center items-center w-screen h-screen px-4 text-white">
      <h2 class="text-2xl mb-2 font-semibold">Elegí tu equipo</h2>
      <div class="overflow-scroll max-h-[40%] w-[100%] max-w-[400px] border border-violet-700 p-2 rounded-md">
        {teams.map((el, index) => (
          <Team
            key={index}
            name={el.strTeam}
            src={el.strTeamBadge}
            setTeamSelected={setTeamSelected}
          />
        ))}
      </div>
      {teamSelected !== "" ? (
        <div class="flex flex-col mt-4 gap-2">
          <p>
            Elegiste <b>{teamSelected}</b>.
          </p>{" "}
          <Button
            func="primary"
            label="Continuar"
            onClick={() => handleSelected(teamSelected)}
          />
        </div>
      ) : null}
    </section>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #01010190;
  text-align: center;
  justify-content: center;
`;

const TeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cartel = styled.div`
  display: flex;
  bottom: 0;
  justify-content: space-between;
  padding: 0 10%;
  align-items: center;
`;

export default SelectTeam;
