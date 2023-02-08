import { useNavigate } from 'react-router-dom'
import { Container } from './components/styles';
import './index.css';
import styled from 'styled-components';

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <div style = {{paddingBottom: '36px'}}>
      <h1 style = {{margin: '0'}}>Cancheros</h1>
      <p>Tu historial de partidos.</p>
      <div style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <button onClick = {() => navigate('/login')}>INGRESAR</button>
      <SecondButton onClick = {() => navigate('/signup')}>Registrarse</SecondButton>
      </div>
      </div>
    </Container>
  )
}

const SecondButton = styled.button`
  color: var(--blue-color);
  background: none;
`

export default App
