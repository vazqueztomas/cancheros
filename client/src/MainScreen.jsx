import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import { setNewMatch, getTeams } from "../services/services";
import LogoutButton from "./LogoutButton";
import SubmitButton from "./components/SubmitButton";
import CancelButton from "./components/CancelButton";
import Label from "./components/Label";
import DateInput from "./components/DateInput";
import Matches from "./Matches";

const MainScreen = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [teams, setTeams] = useState([]);
  const email = localStorage.getItem("email");

  const initialValues = {
    email,
    playVersus: "",
    matchDay: "",
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
    getTeam();
  }, []);

  const setMatch = async (matchData) => {
    try {
      const response = await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <LogoutButton />
      {!visibleForm ? <Matches email={email} teams={teams} /> : null}

      {visibleForm ? (
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values);
            await setMatch(values);
            setVisibleForm(!visibleForm);
          }}
        >
          {(values) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
              }}
            >
              <Label content="Contra quién jugó tu equipo ?" />
              <Field as="select" name="playVersus">
                {teams.map((el, ind) => (
                  <option key={ind}>{el.strTeam}</option>
                ))}
              </Field>
              <DateInput />
              <Botonera>
                <SubmitButton content="Cargar partido" />
                <CancelButton onClick={() => setVisibleForm(!visibleForm)} />
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

export default MainScreen;
