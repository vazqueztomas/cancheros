import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getTeams } from "../services/services";
import LogoutButton from "./LogoutButton";
import Matches from "./Matches";
import FormNewMatch from "./components/FormNewMatch";

const MainScreen = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const email = localStorage.getItem("email");

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
  }, []);

  return (
    <Container>
      <LogoutButton />
      {!visibleForm ? <Matches email={email} teams={teams} /> : null}

      {visibleForm ? (
        <FormNewMatch
          teams={teams}
          setVisibleForm={setVisibleForm}
          visibleForm={visibleForm}
        />
      ) : null}
      {!visibleForm && (
        <button onClick={() => setVisibleForm(!visibleForm)}>
          Añadir partido
        </button>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  background-color: #01010110;
`;

export default MainScreen;
