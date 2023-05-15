import React from "react";
import { Link } from "react-router-dom";
import EscudoAfa from "../components/EscudoAfa";
import styled from "styled-components";

const LoginSuccesfull = () => {
  return (
    <section class="bg-gray-800 text-white flex flex-col w-screen h-screen items-center justify-center text-center gap-2 px-4">
      <EscudoAfa />
      <h1 class="text-3xl">Gracias por ser parte de Cancheros!</h1>
      <p>Te esperamos para que puedas anotar todos tus partidos.</p>
      <Link to="/login" class="text-violet-400">
        Ingresa a tu cuenta acá
      </Link>
    </section>
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
