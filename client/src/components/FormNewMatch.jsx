import React from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import Label from "./Label";
import { setNewMatch } from "../../services/services";
import DateInput from "./DateInput";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

const initialValues = {
  email: localStorage.getItem("email"),
  playVersus: "",
  matchDay: "",
  result: [],
};

const FormNewMatch = ({ teams, setVisibleForm, visibleForm }) => {
  const setMatch = async (matchData) => {
    try {
      await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  };

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
            <option value="">Selecciona tu equipo</option>
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
              <Field type="number" name="result[0]" />
              <Field type="number" name="result[1]" />
            </div>
          </Botonera>

          <Botonera>
            <SubmitButton
              content="Cargar partido"
              disabled={
                values.values.playVersus == "" || values.values.matchDay == ""
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
