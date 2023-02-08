import { useNavigate } from 'react-router-dom'
import { Container, SecondButton } from './components/styles';
import './index.css';

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
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


export default App
