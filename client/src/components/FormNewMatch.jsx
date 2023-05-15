import React from "react";
import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import Label from "./Label";
import { setNewMatch } from "../../services/services";
import DateInput from "./DateInput";
import CancelButton from "./CancelButton";
import GoalsInput from "./GoalsInput";
import Button from "./Button";

const initialValues = {
  email: localStorage.getItem("email"),
  playVersus: "",
  matchDay: "",
  result: [],
};

const FormNewMatch = ({ teams, setVisibleForm, visibleForm, user }) => {
  const setMatch = async matchData => {
    try {
      await setNewMatch(matchData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        console.log(values);
      }}
      onSubmit={async values => {
        await setMatch(values);
        setVisibleForm(!visibleForm);
      }}>
      {values => (
        <Form class="flex flex-col">
          <Label content="Contra quién jugó tu equipo ?" />
          <Field
            as="select"
            name="playVersus"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500">
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
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <GoalsInput name="result[0]" />
                <p class="text-xs">{user.club}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}>
                <GoalsInput name="result[1]" />
                <p class="text-xs">
                  {values.values.playVersus
                    ? values.values.playVersus
                    : "Selecciona contrario"}
                </p>
              </div>
            </div>
          </Botonera>

          <div class="flex flex-col gap-2 mt-1">
            <Button
              label="Cargar partido"
              func="primary"
              disabled={
                values.values.playVersus == "" || values.values.matchDay == ""
              }
              type="submit"
            />
            <Button
              label="Cancelar"
              onClick={() => setVisibleForm(!visibleForm)}
            />
          </div>
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
