import { Link } from "react-router-dom";
import styled from "styled-components";
import EscudoAfa from "../components/EscudoAfa";

export default function NotFound() {
  return (
    <Container>
      <EscudoAfa />
      <h1>Oops! No hay nada por acá.</h1>
      <p>Volvé con nosotros.</p>
      <Link to="/">Volver</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10%;
  line-height: 1.1;
`;
