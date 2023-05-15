import { useNavigate } from "react-router-dom";
import "./index.css";
import Button from "./components/Button";

function App() {
  const navigate = useNavigate();
  return (
    <main class=" w-screen h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
      <header class="text-center">
        <h1 class="text-4xl">Cancheros</h1>
        <p>Tu historial de partidos.</p>
      </header>
      <section class="flex flex-col w-screen justify-center items-center gap-3 mt-4">
        <Button
          label="INGRESAR"
          onClick={() => navigate("/login")}
          func="primary"
        />
        <Button
          label="REGISTRARSE"
          onClick={() => navigate("/signup")}
          func="secondary"
        />
      </section>
    </main>
  );
}

export default App;
