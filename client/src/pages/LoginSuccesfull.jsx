import React from "react";
import { Link } from "react-router-dom";
import EscudoAfa from "../components/EscudoAfa";
import styled from "styled-components";

const LoginSuccesfull = () => {
  return (
    <Container>
      <EscudoAfa />
      <h1>Gracias por ser parte de Cancheros!</h1>
      <p>Te esperamos para que puedas anotar todos tus partidos.</p>
      <Link to="/login">Ingresa a tu cuenta acá</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  text-align: center;
  line-height: 1.1;
`;

export default LoginSuccesfull;
