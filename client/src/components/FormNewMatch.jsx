import React from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import Label from "./Label";
import { setNewMatch } from "../../services/services";
import DateInput from "./DateInput";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";
import GoalsInput from "./GoalsInput";

const initialValues = {
  email: localStorage.getItem("email"),
  playVersus: "",
  matchDay: "",
  result: [],
};

const FormNewMatch = ({ teams, setVisibleForm, visibleForm, user }) => {
  const setMatch = async (matchData) => {
    try {
      await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        let errors = {};
        console.log(values);
      }}
      onSubmit={async (values) => {
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
            <option value="">Selecciona el equipo</option>
            {teams.map((el, ind) => (
              <option key={ind}>{el.strTeam}</option>
            ))}
          </Field>
          <DateInput />
          <Botonera>
            <h5>Resultado del partido: </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GoalsInput name="result[0]" />
                <p>{user.club}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GoalsInput name="result[1]" />
                <p>
                  {values.values.playVersus
                    ? values.values.playVersus
                    : "Selecciona contrario"}
                </p>
              </div>
            </div>
          </Botonera>

          <Botonera>
            <SubmitButton
              content="Cargar partido"
              disabled={
                values.values.playVersus == "" ||
                values.values.matchDay == "" ||
                values.values.result[0] ||
                values.values.result[1]
              }
            />
            <CancelButton onClick={() => setVisibleForm(!visibleForm)} />
          </Botonera>
        </Form>
      )}
    </Formik>
  );
};

const Botonera = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export default FormNewMatch;
