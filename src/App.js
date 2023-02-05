import './App.css';
import ArraysComponent from './components/ArraysComponent';

function toUpperCase(text) {
  return text.toUpperCase() + ", ESPAÑA";
}

function App() {
  const name = "Fran";
  const user = {
    name: "Fran",
    address: {
      street: "Calle de Prueba, 25",
      city: "Madrid"
    }
  }

  const userIsLogged = true;

  return (
    <div className="App">
      <h2>Acceso a variables y funciones</h2>
      <p className='hi'>Hola {name}</p>
      <p>La dirección es: {toUpperCase(user.address.street)}</p>
      <p>Tu ciudad es {user.address.city}</p>
      <p>Dos más dos son: {2 + 2}</p>

      <ArraysComponent></ArraysComponent>

      <h2>Condicionales</h2>
      {userIsLogged ? <p>El usuario está logado.</p> : <p>No está logado.</p>}
      <p>El usuario {userIsLogged ? "SI" : "NO"} está logado</p>
      {userIsLogged && <p>{user.name}</p>}
      {userIsLogged ? <p>{user.name}</p> : ""}

    </div>
  );
}

export default App;
