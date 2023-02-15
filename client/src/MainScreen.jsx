import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import { getUser, setNewMatch, getTeams } from "../services/services";
import { myContext } from "../context/AuthProvider";
import MatchCard from "./MatchCard";
import LogoutButton from "./LogoutButton";

const inputDate = (props) => <input type="date" {...props} />;

const MainScreen = () => {
  const { auth } = myContext();
  const [matches, setMatches] = useState([]);
  const [visibleForm, setVisibleForm] = useState(false);
  const [userMainClub, setUserMainClub] = useState(null);
  const [teams, setTeams] = useState([]);
  const email = localStorage.getItem("email");

  const initialValues = {
    email,
    playVersus: "",
    matchDay: "",
  };

  const getMatches = async () => {
    try {
      const response = await getUser(email);
      setMatches(response.matches);
      setUserMainClub(response.club);
    } catch (error) {
      console.error(error);
    }
  };

  const getTeam = async () => {
    try {
      const response = await getTeams();
      setTeams(response.teams);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMatches();
    getTeam();
  }, []);

  const setMatch = async (matchData) => {
    try {
      const response = await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(teams);

  return (
    <Container>
      <LogoutButton />
      {!visibleForm ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "24px",
            gap: "8px",
          }}
        >
          {matches
            ? matches.map((el, ind) => (
                <MatchCard
                  key={ind}
                  clubOne={userMainClub}
                  clubTwo={el.playVersus}
                  date={el.matchDay}
                  teams={teams}
                />
              ))
            : null}
        </div>
      ) : null}

      {visibleForm ? (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await setMatch(values);
            await getMatches();
            setVisibleForm(!visibleForm);
          }}
        >
          {() => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
              }}
            >
              <label>Contra quién jugó tu equipo?</label>
              <Field as="select" name="playVersus">
                {teams.map((el, ind) => (
                  <option key={ind}>{el.strTeam}</option>
                ))}
              </Field>

              <label htmlFor="matchDay">En que fecha?</label>
              <Field as={inputDate} name="matchDay" />

              <Botonera>
                <button type="submit">Cargar partido</button>
                <CancelButton
                  type="button"
                  onClick={() => setVisibleForm(!visibleForm)}
                >
                  Cancelar
                </CancelButton>
              </Botonera>
            </Form>
          )}
        </Formik>
      ) : null}
      {!visibleForm && (
        <button onClick={() => setVisibleForm(!visibleForm)}>
          Añadir partido
        </button>
      )}
    </Container>
  );
};

const Botonera = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  background-color: #01010110;
`;

const CancelButton = styled.button`
  border: 1px solid #2f2f2f;
  background-color: transparent;
  color: white;
`;

export default MainScreen;
