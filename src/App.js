import './App.css';

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
  const motorcycles = ["Honda", "Yamaha", "BMW", "Ducati"];
  const cars = ["Volkswagen", "Nissan", "Mazda", "Peugeot"];
  const userIsLogged = true;

  return (
    <div className="App">
      <h2>Acceso a variables y funciones</h2>
      <p className='hi'>Hola {name}</p>
      <p>La dirección es: {toUpperCase(user.address.street)}</p>
      <p>Tu ciudad es {user.address.city}</p>
      <p>Dos más dos son: {2 + 2}</p>
      <p>La moto en segunda posición es {motorcycles[1]}</p>

      <h2>Arrays:</h2>
      <p>Motos:</p>
      <ul>
        {motorcycles.map((motorcycle) => {
          return <li>{motorcycle}</li>
        })}
      </ul>
      <p>Coches:</p>
      <ol>
        {cars.map(car => <li>{car}</li>)}
      </ol>

      <h2>Condicionales</h2>
      {userIsLogged ? <p>El usuario está logado.</p> : <p>No está logado.</p>}
      <p>El usuario {userIsLogged ? "SI" : "NO"} está logado</p>

    </div>
  );
}

export default App;
