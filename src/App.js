import './App.css';
import ArraysComponent from './components/ArraysComponent/ArraysComponent';
import Greeting from './components/Greeting/Greeting';
import Profile from './components/Profile/Profile';

function toUpperCase(text) {
  return text.toUpperCase() + ", ESPAÑA";
}

function App() {
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
      <h2>Componentes</h2>
      <Greeting name="Gonzalo"></Greeting>
      <Greeting name="Laura"></Greeting>
      <Greeting name="Edu"></Greeting>
      <Greeting name={user.name}></Greeting>

      <Profile nombre="Maria" descripcion="Soy programadora de webs"></Profile>
      <Profile nombre="Carlos" descripcion="Soy mecánico en un taller de coches"></Profile>
      <Profile nombre="Teresa" descripcion="Soy pintora profesional"></Profile>

      <h2>Acceso a variables y funciones</h2>
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
