import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userLogin } from "../services/services";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/AuthProvider";
import { SecondButton } from "./components/styles";
import Label from "./components/Label";

const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { setAuth, setPersist } = myContext();

  const handleLogin = async (user) => {
    try {
      const response = await userLogin(user);
      let userInfo = response.data.userInfo;
      localStorage.setItem("email", userInfo.email);
      setAuth({ userInfo });
      setPersist(true);
      navigate("/select-team");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("persist", true);
  }, []);

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1>Cancheros</h1>
        <p>El historial de tus partidos</p>
      </div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Completa tu email";
          }
          if (!values.password) {
            errors.password = "Completa tu contraseña";
          }
        }}
        onSubmit={async (valores) => {
          await handleLogin(valores);
        }}
      >
        {() => (
          <Form
            style={{
              display: "flex",
              gap: "12px",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <Column>
              <Label htmlFor="email" content="Email" />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </Column>

            <Column>
              <Label htmlFor="password" content="Password" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit">Ingresar</button>
            </Column>
          </Form>
        )}
      </Formik>
      <SecondButton onClick={() => navigate("/signup")}>
        Aun no tienes cuenta?
      </SecondButton>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100vh;
  gap: 32px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Login;
