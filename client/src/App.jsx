import { useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Login'

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>Cancheros</h1>
      <p>Cancheros es la aplicación que todo futbolista necesita. Querés agendar todos los partidos a los que vas?</p>
      <button onClick = {() => navigate('/login')}>Logear</button>
    </div>
  )
}

export default App
