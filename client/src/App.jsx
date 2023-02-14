import { useNavigate } from "react-router-dom";
import { SecondButton } from "./components/styles";
import styled from "styled-components";
import "./index.css";

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 style={{ margin: "0" }}>Cancheros</h1>
      <p>Tu historial de partidos.</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button onClick={() => navigate("/login")}>INGRESAR</button>
        <SecondButton onClick={() => navigate("/signup")}>
          Registrarse
        </SecondButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default App;
