import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTeams, handleNewClub, getUser } from "../services/services";
import Team from "./Team";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/AuthProvider";

const SelectTeam = () => {
  const { auth } = myContext();
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
      user.data.club ? navigate("/mainscreen") : null;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClubUser();
    getTeam();
  }, []);

  const handleSelected = async (team) => {
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
    <Container>
      <h2 style={{ marginTop: "50px" }}>Elegí tu equipo</h2>
      <TeamsContainer>
        {teams.map((el, index) => (
          <Team
            key={index}
            name={el.strTeam}
            src={el.strTeamBadge}
            setTeamSelected={setTeamSelected}
          />
        ))}
      </TeamsContainer>
      {teamSelected !== "" ? (
        <Cartel>
          <p>
            Elegiste <b>{teamSelected}</b>.
          </p>{" "}
          <button onClick={() => handleSelected(teamSelected)}>
            Continuar
          </button>
        </Cartel>
      ) : null}
    </Container>
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
