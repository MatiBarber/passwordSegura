import { useState } from 'react';
import './App.css';
import EntradaPassword from './components/EntradaPassword';

function App() {
  const[password, setPassword] = useState("")

  return (
    <div className="App">
      <h1>Aplicacion de fortaleza de contraseña</h1>
      <EntradaPassword password={password} setPassword={setPassword}></EntradaPassword>
    </div>
  );
}

export default App;
