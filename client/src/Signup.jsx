import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { userSignUp } from "../services/services";
import { Link, useNavigate } from "react-router-dom";
import Label from "./components/Label";
import EscudoAfa from "./components/EscudoAfa";
import styled from "styled-components";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  rePassword: "",
};

const Signup = () => {
  const navigate = useNavigate();

  const onSignUp = async (userData) => {
    try {
      const response = await userSignUp(userData);
      navigate("/successfull");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <EscudoAfa />
      <Formik
        initialValues={initialValues}
        validate={() => {
          let errores = {};
          return errores;
        }}
        onSubmit={(values) => {
          let data = {
            name: values.firstname + " " + values.lastname,
            email: values.email,
            password: values.password,
          };
          onSignUp(data);
        }}
      >
        {() => (
          <Form
            autoComplete="off"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2em 0",
              gap: "8px",
              justifyContent: "center",
              width: "70%",
            }}
          >
            <Label htmlFor="firstname" content="Nombre" />
            <Field name="firstname" placeholder="Lionel Andrés" />

            <ErrorMessage name="firstname" aria-live="assertive">
              {(msg) => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>

            <Label htmlFor="lastname" content="Apellido" />
            <Field name="lastname" placeholder="Messi" />
            <ErrorMessage name="lastname" aria-live="assertive">
              {(msg) => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <Label htmlFor="email" content="Mail" />
            <Field
              id="email"
              name="email"
              placeholder="email@email.com"
              aria-describedby="explicacionmail"
            />
            <ErrorMessage name="email" aria-live="assertive">
              {(msg) => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <Label htmlFor="password" content="Contraseña" />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              aria-describedby="explicacionpassword"
            />
            <ErrorMessage name="password" aria-live="assertive">
              {(msg) => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>

            <Label htmlFor="rePassword" content="Repetir Contraseña" />
            <Field
              name="rePassword"
              type="password"
              placeholder="Repetir contraseña"
              aria-describedby="explicacionrepassword"
            />
            <ErrorMessage name="rePassword" aria-live="assertive">
              {(msg) => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button type="submit">Registrarse</button>
              <Link to="/login">Ya tengo cuenta</Link>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default Signup;
