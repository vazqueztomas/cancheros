import { useNavigate } from 'react-router-dom'
import { Container } from './components/styles';
import './index.css';

function App() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
      <h1>Cancheros</h1>
      <p>Tu historial de partidos. </p>
      <div style = {{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <button onClick = {() => navigate('/login')}>INGRESAR</button>
      <button onClick = {() => navigate('/signup')}>Registrarse</button>
      </div>
      </div>
    </Container>
  )
}

export default App
